"use server";

import { ApiResponse } from "@/lib/ApiResponse";

export async function handleHomeContactForm(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return ApiResponse(200, "OK", formData.get("number"));
}
