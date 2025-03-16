"use server";

import { FormError } from "@/app/common/form-error.interface";
import { post } from "@/app/util/fetch";
import { redirect } from "next/navigation";

function formatServerErrorMessage(message: string) {
  return message.charAt(0).toLocaleUpperCase() + message.slice(1);
}

export async function getErrorMessage(response: any) {
  if (response.message) {
    if (Array.isArray(response.message)) {
      return formatServerErrorMessage(response.message[0]);
    }
    return formatServerErrorMessage(response.message);
  }
  return "Unknown error occurred.";
}

export default async function createUser(
  _prevState: FormError,
  formData: FormData
) {
  const { error } = await post("users", formData);
  if (error) {
    return { error };
  }
  redirect("/");
}
