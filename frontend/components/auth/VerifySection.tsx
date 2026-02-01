"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { verifyEmail, resendOTP } from "@/services/auth/verification.service";
import { toast } from "react-toastify";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import OtpInput from "@/components/ui/OtpInput";
import Image from "next/image";

// Define schema inline or import
const verifySchema = z.object({
  otp: z
    .string()
    .min(6, "OTP must comprise 6 digits")
    .max(6, "OTP must comprise 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});

type VerifyFormValues = z.infer<typeof verifySchema>;

export default function VerifySection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<VerifyFormValues>({
    resolver: zodResolver(verifySchema),
  });

  const { mutate: verifyMutation, isPending: isVerifying } = useMutation({
    mutationFn: async (data: VerifyFormValues) => {
      if (!email) throw new Error("Email is missing");
      return await verifyEmail({ email, otp: data.otp });
    },
    onSuccess: () => {
      router.push("/onboarding");
    },
    onError: (error: Error) => {
      setError("otp", {
        type: "manual",
        message: error.message || "Failed to verify. Please check code.",
      });
    },
  });

  const { mutate: resendMutation, isPending: isResending } = useMutation({
    mutationFn: async () => {
      if (!email) throw new Error("Email is missing");
      return await resendOTP(email);
    },
    onSuccess: () => {
      toast.success("New OTP sent to your email.");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to resend OTP.");
    },
  });

  if (!email) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <p>Email not found. Please register again.</p>
        <Link href="/auth/register" className="text-primary mt-4">
          Register
        </Link>
      </div>
    );
  }

  return (
    <section className="px-4 md:px-6 flex justify-center pt-[120px] pb-20 items-center relative min-h-screen">
      <div className="absolute top-8 right-8 z-50">
        <Link
          href="/"
          className="text-white text-sm font-medium underline hover:text-primary transition-colors"
        >
          Go Home
        </Link>
      </div>

      <div className="relative w-full max-w-[500px] min-h-[500px] rounded-[30px] border border-[#262626] flex flex-col items-center justify-center p-6 md:p-10 relative">
        <div className="absolute inset-0 w-full h-full rounded-[30px] overflow-hidden">
          <Image
            src="/images/Login.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 w-full max-w-[1000px] text-center">
          <ScrollAnimation>
            <h1 className="text-primary text-3xl md:text-4xl font-medium mb-4">
              Verify Account
            </h1>
            <p className="text-[#B3B3B3] text-[16px] mb-8 max-w-2xl mx-auto">
              Please enter the 6-digit code sent to{" "}
              <span className="text-white font-medium">{email}</span>
            </p>

            <form
              onSubmit={handleSubmit((data) => verifyMutation(data))}
              className="space-y-6 max-w-[400px] mx-auto"
            >
              <div className="relative">
                <Controller
                  control={control}
                  name="otp"
                  render={({ field: { onChange, value } }) => (
                    <OtpInput
                      value={value || ""}
                      onChange={onChange}
                      error={!!errors.otp}
                    />
                  )}
                />
                {errors.otp && (
                  <p className="text-red-500 text-xs mt-3 text-center">
                    {errors.otp.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full bg-primary text-[#1C1C1C] font-semibold rounded-full py-4 text-[16px] hover:bg-opacity-90 transition-all hover:scale-[1.02] disabled:opacity-50"
              >
                {isVerifying ? "Verifying..." : "Verify Code"}
              </button>
            </form>

            <div className="mt-6">
              <button
                onClick={() => resendMutation()}
                disabled={isResending}
                className="text-sm text-[#B3B3B3] hover:text-white underline disabled:opacity-50"
              >
                {isResending ? "Resending..." : "Resend Code"}
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
