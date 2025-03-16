"use server";

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

export default async function createUser(_prevState: any, formData: FormData) {
  const { error } = await post("users", formData);
  if (error) {
    return { error };
  }
  redirect("/");
}
