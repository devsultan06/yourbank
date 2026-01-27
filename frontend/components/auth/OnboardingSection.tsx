"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OnboardingSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend API
    console.log("Submitting:", formData);
    // On success, redirect to dashboard
    // router.push('/dashboard');
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

      <div className="relative w-full max-w-[500px] min-h-[500px] md:min-h-[600px] rounded-[30px] overflow-hidden border border-[#262626] flex flex-col items-center justify-center p-6 md:p-10">
        <div className="absolute inset-0 w-full h-full">
          {/* Using the same background as Login/Signup for consistency */}
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
            <h1 className="text-primary text-3xl md:text-4xl font-medium mb-4">
              Let's Get You Set Up
            </h1>
            <p className="text-[#B3B3B3] text-[16px] mb-12">
              We just need a few more details to create your secure banking
              profile.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full bg-[#1A1A1A] border border-[#262626] rounded-full px-6 py-4 text-white placeholder:text-[#59595A] focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full bg-[#1A1A1A] border border-[#262626] rounded-full px-6 py-4 text-white placeholder:text-[#59595A] focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-[#1A1A1A] border border-[#262626] rounded-full px-6 py-4 text-white placeholder:text-[#59595A] focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* ID Verification Placeholder (Simulated) */}
              <div className="p-6 bg-[#1A1A1A] border border-[#262626] border-dashed rounded-[20px] text-center cursor-pointer hover:border-primary transition-colors">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#262626] flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <circle cx="9" cy="10" r="2" />
                      <line x1="15" y1="8" x2="17" y2="8" />
                      <line x1="15" y1="12" x2="17" y2="12" />
                      <line x1="7" y1="16" x2="17.01" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">
                      Upload ID Document
                    </p>
                    <p className="text-[#59595A] text-xs mt-1">
                      Passport or National ID (Optional for Demo)
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary text-[#1C1C1C] font-semibold rounded-full py-4 text-[16px] hover:bg-opacity-90 transition-all hover:scale-[1.02]"
                >
                  Complete Setup
                </button>
              </div>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
