import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useTranslation } from "react-i18next";

import { Input } from "@/components/ui/input";
import { useDebounce } from "react-use";

function SearchInput() {
  const { t } = useTranslation();
  const search = useSearchParams().toString();
  const pathname = usePathname();
  const router = useRouter();
  const parsedSearchParams = qs.parse(search);
  const [term, setTerm] = React.useState<string>(() => {
    return typeof parsedSearchParams.term === "string"
      ? parsedSearchParams.term
      : "";
  });

  useDebounce(updateURL, 2000, [term]);

  function updateURL() {
    const clonedParams = { ...parsedSearchParams };
    delete clonedParams.term;
    const newUrl = qs.stringifyUrl({
      url: pathname,
      query: {
        ...clonedParams,
        term: term ? term : undefined,
      },
    });
    router.push(newUrl);
  }

  return (
    <Input
      value={term}
      onChange={(e) => {
        setTerm(e.target.value);
      }}
      placeholder={t("product.searchPlaceholder")}
      className="h-8 w-[240px]"
    />
  );
}

export default SearchInput;