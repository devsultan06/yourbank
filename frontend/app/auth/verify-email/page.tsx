"use client";

import { Suspense } from "react";
import VerifySection from "@/components/auth/VerifySection";
import Image from "next/image";

// Placeholder for loading state (can be skeleton or spinner)
const VerifyingSkeleton = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function VerifyEmailPage() {
  return (
    <div className="bg-[#191919] min-h-screen flex items-center justify-center">
      <main className="w-full">
        <Suspense fallback={<VerifyingSkeleton />}>
          <VerifySection />
        </Suspense>
      </main>
    </div>
  );
}
