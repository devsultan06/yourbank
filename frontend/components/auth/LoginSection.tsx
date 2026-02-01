"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { login } from "@/services/auth/login.service";
import { loginSchema, LoginFormValues } from "@/schemas/auth";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function LoginSection() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: loginMutation, isPending: isLoggingIn } = useMutation({
    mutationFn: (data: LoginFormValues) => login(data),
    onSuccess: () => {
      toast.success("Login successful!");
      router.push("/dashboard");
    },
    onError: (error: Error) => {
      toast.error(
        error.message || "Login failed. Please check your credentials.",
      );
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    loginMutation(data);
  };

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

      <div className="relative w-full max-w-[500px] min-h-[500px] md:min-h-[600px] rounded-[30px] border border-[#262626] flex flex-col items-center justify-center p-6 md:p-10">
        <div className="absolute inset-0 w-full h-full rounded-[30px] overflow-hidden">
          <Image
            src="/images/Login.png"
            alt="Login Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 w-full max-w-[500px] text-center">
          <ScrollAnimation>
            <h1 className="text-primary text-3xl text-3xl md:text-4xl font-medium mb-4">
              Login
            </h1>
            <p className="text-[#B3B3B3] text-[16px] mb-12">
              Welcome back! Please log in to access your account.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 max-w-[400px] mx-auto"
            >
              {/* Email */}
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

              {/* Password */}
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
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

              {/* Forgot Password */}
              <div className="flex justify-end">
                <Link
                  href="/auth/forgot-password"
                  className="text-[#fff] text-[14px] hover:text-primary transition-colors underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Buttons */}
              <div className="space-y-4 pt-4">
                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full bg-primary text-[#1C1C1C] font-semibold rounded-full py-4 text-[16px] hover:bg-opacity-90 transition-all hover:scale-[1.02] disabled:opacity-50"
                >
                  {isLoggingIn ? "Logging in..." : "Login"}
                </button>
                <Link
                  href="/auth/register"
                  className="block w-full bg-[#333333] text-[#fff] font-medium rounded-full py-4 text-[16px] hover:bg-[#404040] transition-all hover:scale-[1.02]"
                >
                  Sign Up
                </Link>
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="h-[1px] bg-[#262626] flex-1"></div>
              <span className="text-[#B3B3B3] text-[14px]">
                Or Continue with
              </span>
              <div className="h-[1px] bg-[#262626] flex-1"></div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4">
              <button className="">
                <Image
                  src="/images/Icon Container (11).png"
                  alt="Google"
                  width={54}
                  height={54}
                  className="rounded-full"
                />
              </button>
              <button className="">
                <Image
                  src="/images/Icon Container (12).png"
                  alt="Facebook"
                  width={54}
                  height={54}
                  className="rounded-full"
                />
              </button>
              <button className="">
                <Image
                  src="/images/Icon Container (13).png"
                  alt="Apple"
                  width={54}
                  height={54}
                  className="rounded-full"
                />
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
