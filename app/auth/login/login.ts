"use server";

import { FormError } from "@/app/common/form-error.interface";
import { API_URL } from "@/app/constants/api";
import { redirect } from "next/navigation";

// Define a server-side error formatter instead of importing from client code
function formatServerErrorMessage(response: any): string {
  if (typeof response === "string") return response;
  if (response?.message) {
    if (Array.isArray(response.message)) {
      return response.message[0];
    }
    return response.message;
  }
  return "Unknown error occurred.";
}

export default async function login(_prevState: FormError, formData: FormData) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
    credentials: "include",
  });

  if (!res.ok) {
    const parsedRes = await res.json();
    return { error: formatServerErrorMessage(parsedRes) };
  }

  redirect("/");
}
