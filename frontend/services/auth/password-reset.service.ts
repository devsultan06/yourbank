import { http } from "@/lib/fetch";
import { ApiResponse } from "@/types/api";

export const forgotPassword = async (
  email: string,
): Promise<ApiResponse<any>> => {
  const response = await http.post<any>("/auth/forgot-password", { email });
  if (!response.success) throw new Error(response.message);
  return response;
};

export const verifyResetOtp = async (
  email: string,
  otp: string,
): Promise<ApiResponse<any>> => {
  const response = await http.post<any>("/auth/verify-reset-otp", {
    email,
    otp,
  });
  if (!response.success) throw new Error(response.message);
  return response;
};

export const resetPassword = async (
  email: string,
  otp: string,
  newPassword: string,
): Promise<ApiResponse<any>> => {
  const response = await http.post<any>("/auth/reset-password", {
    email,
    otp,
    newPassword,
  });
  if (!response.success) throw new Error(response.message);
  return response;
};
