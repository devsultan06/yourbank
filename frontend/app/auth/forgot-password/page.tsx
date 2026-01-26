"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/home/Testimonials";
import ForgotPasswordSection from "@/components/auth/ForgotPasswordSection";

export default function ForgotPasswordPage() {
  return (
    <div className="bg-[#191919] min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <ForgotPasswordSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
