"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function ForgotPasswordSection() {
  return (
    <section className="px-4 md:px-6 flex justify-center pt-[50px] items-center relative">
      <div className="relative w-full max-w-[1000px] min-h-[500px] md:min-h-[600px] rounded-[30px] overflow-hidden border border-[#262626] flex flex-col items-center justify-center p-8 md:p-12 relative">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/Login.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 w-full max-w-[600px] text-center">
          <ScrollAnimation>
            <h1 className="text-primary text-3xl md:text-[48px] font-medium mb-4">
              Forgot Password
            </h1>
            <p className="text-[#B3B3B3] text-[16px] mb-12 max-w-lg mx-auto">
              Enter your email address associated with your account and we will
              email you a link to reset your password.
            </p>

            <form className="space-y-6 max-w-[500px] mx-auto">
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full bg-[#1A1A1A] border border-[#262626] rounded-full px-6 py-4 text-white placeholder:text-[#59595A] focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Buttons */}
              <div className="space-y-4 pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary text-[#1C1C1C] font-semibold rounded-full py-4 text-[16px] hover:bg-opacity-90 transition-all hover:scale-[1.02]"
                >
                  Submit
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
  );
}
