"use server";
import { cookies } from "next/headers";
import { API_URL } from "./constants/api";

export default async function getMe() {
  const me = await fetch(`${API_URL}/users/me`, {
    headers: { Cookie: (await cookies()).toString() },
  });
  return me.json();
}
