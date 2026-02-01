import { http } from "@/lib/fetch";
import { ApiResponse } from "@/types/api";
import { LoginFormValues } from "@/schemas/auth";

export interface LoginResponse {
  accessToken: string;
}

export const login = async (
  credentials: LoginFormValues,
): Promise<ApiResponse<LoginResponse>> => {
  const response = await http.post<LoginResponse>("/auth/login", credentials);

  // Save token to localStorage so fetch.ts can use it
  if (typeof window !== "undefined" && response.data?.accessToken) {
    localStorage.setItem("accessToken", response.data.accessToken);
  }

  if (!response.success) {
    throw new Error(response.message || "Login failed");
  }

  return response;
};
