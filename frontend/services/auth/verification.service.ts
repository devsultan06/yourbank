import { http } from "@/lib/fetch";
import { ApiResponse } from "@/types/api";

export interface VerifyEmailCredentials {
  email: string;
  otp: string;
}

export const verifyEmail = async (
  credentials: VerifyEmailCredentials,
): Promise<ApiResponse<null>> => {
  const response = await http.post<null>("/auth/verify-email", credentials);

  if (!response.success) {
    throw new Error(response.message || "Verification failed");
  }

  return response;
};

export const resendOTP = async (email: string): Promise<ApiResponse<null>> => {
  const response = await http.post<null>("/auth/resend-otp", {
    email,
  });

  if (!response.success) {
    throw new Error(response.message || "Failed to resend OTP");
  }

  return response;
};
