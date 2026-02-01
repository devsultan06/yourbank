"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useState } from "react";
import { resetPassword } from "@/services/auth/password-reset.service";
import { resetPasswordSchema, ResetPasswordFormValues } from "@/schemas/auth";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const otp = searchParams.get("otp");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutate: resetMutation, isPending } = useMutation({
    mutationFn: async (data: ResetPasswordFormValues) => {
      if (!email || !otp) throw new Error("Missing email or OTP");
      return await resetPassword(email, otp, data.password);
    },
    onSuccess: () => {
      toast.success("Password reset successfully! Please login.");
      router.push("/auth/login");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to reset password.");
    },
  });

  const onSubmit = (data: ResetPasswordFormValues) => {
    resetMutation(data);
  };

  if (!email || !otp) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white bg-[#191919]">
        <p>Invalid link. Please restart the process.</p>
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

        <div className="relative w-full max-w-[500px] min-h-[500px] md:min-h-[600px] rounded-[30px] border border-[#262626] flex flex-col items-center justify-center p-6 md:p-10">
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
                Reset Password
              </h1>
              <p className="text-[#B3B3B3] text-[16px] mb-12">
                Enter your new password below.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 max-w-[400px] mx-auto"
              >
                {/* Password Field */}
                <div className="relative">
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="New Password"
                    className="w-full bg-[#1A1A1A] border border-[#262626] rounded-full px-6 py-4 text-white placeholder:text-[#59595A] focus:outline-none focus:border-primary transition-colors pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-[#59595A] hover:text-white transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1 text-left px-6">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="relative">
                  <input
                    {...register("confirmPassword")}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm New Password"
                    className="w-full bg-[#1A1A1A] border border-[#262626] rounded-full px-6 py-4 text-white placeholder:text-[#59595A] focus:outline-none focus:border-primary transition-colors pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-[#59595A] hover:text-white transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1 text-left px-6">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <div className="space-y-4 pt-4">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-primary text-[#1C1C1C] font-semibold rounded-full py-4 text-[16px] hover:bg-opacity-90 transition-all hover:scale-[1.02] disabled:opacity-50"
                  >
                    {isPending ? "Resetting..." : "Reset Password"}
                  </button>
                </div>
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
}
