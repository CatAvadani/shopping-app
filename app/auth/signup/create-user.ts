"use server";

import { API_URL } from "@/app/constants/api";
import { redirect } from "next/navigation";

function formatServerErrorMessage(message: string) {
  return message.charAt(0).toLocaleUpperCase() + message.slice(1);
}

function getErrorMessage(response: any) {
  if (response.message) {
    if (Array.isArray(response.message)) {
      return formatServerErrorMessage(response.message[0]);
    }
    return formatServerErrorMessage(response.message);
  }
  return "Unknown error occurred.";
}

export default async function createUser(_prevState: any, formData: FormData) {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    body: formData,
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  redirect("/");
}
