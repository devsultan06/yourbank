"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  verifyResetOtp,
  forgotPassword,
} from "@/services/auth/password-reset.service";
import { verifyResetOtpSchema, VerifyResetOtpFormValues } from "@/schemas/auth";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import OtpInput from "@/components/ui/OtpInput";

export default function VerifyResetOtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<VerifyResetOtpFormValues>({
    resolver: zodResolver(verifyResetOtpSchema),
  });

  const { mutate: verifyMutation, isPending: isVerifying } = useMutation({
    mutationFn: async (data: VerifyResetOtpFormValues) => {
      if (!email) throw new Error("Email is missing");
      return await verifyResetOtp(email, data.otp);
    },
    onSuccess: (_, variables) => {
      toast.success("Code verified successfully.");
      router.push(
        `/auth/forgot-password/reset?email=${encodeURIComponent(email!)}&otp=${variables.otp}`,
      );
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
      return await forgotPassword(email);
    },
    onSuccess: () => {
      toast.success("New code sent to your email.");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to resend code.");
    },
  });

  if (!email) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white bg-[#191919]">
        <p>Email not found. Please restart the process.</p>
        <Link href="/auth/forgot-password" className="text-primary mt-4">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#191919] min-h-screen flex items-center justify-center">
      <section className="px-4 md:px-6 flex justify-center pt-[120px] pb-20 items-center relative w-full">
        <div className="absolute top-8 right-8 z-50">
          <Link
            href="/"
            className="text-white text-sm font-medium underline hover:text-primary transition-colors"
          >
            Go Home
          </Link>
        </div>

        <div className="relative w-full max-w-[500px] min-h-[500px] rounded-[30px] border border-[#262626] flex flex-col items-center justify-center p-6 md:p-10">
          <div className="absolute inset-0 w-full h-full rounded-[30px] overflow-hidden">
            <Image
              src="/images/Login.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative z-10 w-full max-w-[500px] text-center">
            <ScrollAnimation>
              <h1 className="text-primary text-3xl md:text-4xl font-medium mb-4">
                Verify Code
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

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={isVerifying}
                    className="w-full bg-primary text-[#1C1C1C] font-semibold rounded-full py-4 text-[16px] hover:bg-opacity-90 transition-all hover:scale-[1.02] disabled:opacity-50"
                  >
                    {isVerifying ? "Verifying..." : "Verify Code"}
                  </button>

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => resendMutation()}
                      disabled={isResending}
                      className="text-sm text-[#B3B3B3] hover:text-white underline disabled:opacity-50"
                    >
                      {isResending ? "Resending..." : "Resend Code"}
                    </button>
                  </div>
                </div>
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
}
