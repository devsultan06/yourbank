import { http } from "@/lib/fetch";
import {
  SignupCredentials,
  TwoFactorSetupResponse,
  ApiResponse,
} from "@/types/auth/api";

export const signup = async (
  credentials: SignupCredentials
): Promise<TwoFactorSetupResponse> => {
  const response = await http.post<ApiResponse<TwoFactorSetupResponse>>(
    "/api/v1/auth/signup",
    credentials
  );

  console.log("🔍 Raw Response:", response);

  // Check for API success
  if (!response.success || !response.data) {
    throw new Error(response.message || "Signup failed");
  }

  return response.data;
};
