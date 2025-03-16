"use server";

import { redirect } from "next/navigation";

export default async function createUser(_prevState: any, formData: FormData) {
  const res = await fetch(`http://localhost:3001/users`, {
    method: "POST",
    body: formData,
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: parsedRes };
  }
  redirect("/");
}
