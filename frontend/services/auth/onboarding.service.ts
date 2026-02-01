import { http } from "@/lib/fetch";
import { ApiResponse } from "@/types/api";

export interface OnboardingData {
  firstName: string;
  lastName: string;
  phone: string;
}

export const completeOnboarding = async (
  data: OnboardingData,
): Promise<ApiResponse<any>> => {
  const response = await http.put<any>("/auth/onboarding", data);

  if (!response.success) {
    throw new Error(response.message || "Onboarding failed");
  }

  return response;
};
