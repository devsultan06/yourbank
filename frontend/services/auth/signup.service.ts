import { http } from "@/lib/fetch";
export interface SignupCredentials {
  username: string;
  email: string;
  password: string;
}

export interface SignupResponseData {
  user: {
    id: number;
    email: string;
    username: string;
  };
  accessToken: string;
}

export const signup = async (
  credentials: SignupCredentials,
): Promise<SignupResponseData> => {
  const response = await http.post<SignupResponseData>(
    "/auth/register", // Ensure this matches backend route /auth/register
    credentials,
  );

  if (!response.success || !response.data) {
    throw new Error(response.message || "Signup failed");
  }

  // Save token to localStorage so fetch.ts can use it
  if (typeof window !== "undefined" && response.data.accessToken) {
    localStorage.setItem("token", response.data.accessToken);
  }

  return response.data;
};
