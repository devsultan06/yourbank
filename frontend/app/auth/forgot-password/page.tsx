"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { forgotPassword } from "@/services/auth/password-reset.service";
import { forgotPasswordSchema, ForgotPasswordFormValues } from "@/schemas/auth";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { mutate: forgotPasswordMutation, isPending } = useMutation({
    mutationFn: (data: ForgotPasswordFormValues) => forgotPassword(data.email),
    onSuccess: (_, variables) => {
      toast.success("Verification code sent to your email.");
      router.push(
        `/auth/forgot-password/verify?email=${encodeURIComponent(variables.email)}`,
      );
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to send verification code.");
    },
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    forgotPasswordMutation(data);
  };

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
                Forgot Password
              </h1>
              <p className="text-[#B3B3B3] text-[16px] mb-12">
                Enter your email address to receive a verification code.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 max-w-[400px] mx-auto"
              >
                <div className="relative">
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full bg-[#1A1A1A] border border-[#262626] rounded-full px-6 py-4 text-white placeholder:text-[#59595A] focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 text-left px-6">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-4 pt-4">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-primary text-[#1C1C1C] font-semibold rounded-full py-4 text-[16px] hover:bg-opacity-90 transition-all hover:scale-[1.02] disabled:opacity-50"
                  >
                    {isPending ? "Sending..." : "Send Verification Code"}
                  </button>
                  <Link
                    href="/auth/login"
                    className="block w-full bg-[#333333] text-[#fff] font-medium rounded-full py-4 text-[16px] hover:bg-[#404040] transition-all hover:scale-[1.02]"
                  >
                    Back to Login
                  </Link>
                </div>
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
}
