import * as React from "react";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/SVGR";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/validation";
import { APIError } from "@/lib/fetch";
import { LoginFormType } from "./LoginProvider";

interface PropsType {
  initialValues: LoginFormType;
  onSubmit(data: LoginFormType): Promise<void>;
}

export default function LoginForm({ onSubmit, initialValues }: PropsType) {
  const { t } = useTranslation();
  const emailId = React.useId();
  const passwordId = React.useId();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: initialValues,
  });
  async function submitHandler(values: LoginFormType) {
    setIsLoading(true);
    try {
      await onSubmit(values);
    } catch (error) {
      if (error instanceof APIError) {
        return form.setError("email", {
          type: "manual",
          message: t("Invalid email or password. Please try again."),
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6")}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="grid gap-y-2"
          noValidate
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel htmlFor={emailId}>{t("Email")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id={emailId}
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                      className="digit"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel htmlFor={passwordId}>{t("Password")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id={passwordId}
                      type="password"
                      autoCapitalize="none"
                      autoComplete="off"
                      autoCorrect="off"
                      disabled={isLoading}
                      className="digit"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="me-2 h-4 w-4 animate-spin" />
            )}
            {t("Enter")}
          </Button>
        </form>
      </Form>
    </div>
  );
}
