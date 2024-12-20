"use client";
import { z } from "zod";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useRouter, useSearchParams } from "next/navigation";

import { userPasswordSchema } from "@/validation";
import { useUserSlice } from "@/store/user";
import { updateUserPassword } from "@/services/user";
import { toast } from "@/hooks/use-toast";
import { APIError } from "@/lib/fetch";
import { toastError } from "@/lib/toasHandlers";
import { AccountForm } from "./account-form";

export type AccountFormValues = z.infer<typeof userPasswordSchema>;

const defaultValues: AccountFormValues = {
  newPassword: "",
  oldPassword: "",
  email: "",
};

function AccountProvider() {
  const router = useRouter();
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const { loginData, logout } = useUserSlice();

  async function onSubmit(data: AccountFormValues) {
    if (loginData) {
      try {
        await updateUserPassword(loginData?.id, data);
        const encodedEmail = encodeURIComponent(loginData.email);
        const encodedNext = encodeURIComponent(window.location.pathname);
        const queryString = new URLSearchParams(searchParams.toString());
        queryString.set("email", encodedEmail);
        queryString.set("next", encodedNext);

        logout();
        toast({
          title: t("Success"),
          description: t("Your password has been updated successfully."),
        });
        router.push(`/login?${queryString.toString()}`);
      } catch (error) {
        if (error instanceof APIError) {
          // display banner errors and skip unauthorized banner
          toastError(toast, error, true);
        }
      }
    }
  }

  // wait for zustand to hydrate then load the form
  // because `defaultValue` for some of form elements
  // won't happen after zustand's hydration
  if (!loginData) {
    return null;
  }

  const initialValue: AccountFormValues = {
    ...defaultValues,
    email: loginData.email,
  };

  return <AccountForm onSubmit={onSubmit} initialValue={initialValue} />;
}

export default AccountProvider;
