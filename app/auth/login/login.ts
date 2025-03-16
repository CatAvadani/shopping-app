"use server";

import { FormError } from "@/app/common/form-error.interface";
import { API_URL } from "@/app/constants/api";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getErrorMessage } from "../signup/create-user";

export default async function login(
  _prevState: FormError,
  formData: FormData
): Promise<FormError> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: await getErrorMessage(parsedRes) };
  }
  setAuthCookie(res);
  redirect("/");
}

const setAuthCookie = async (response: Response) => {
  const setCookieHeader = response.headers.get("Set-Cookie");
  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];
    (await cookies()).set({
      name: "Authentication",
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
};
