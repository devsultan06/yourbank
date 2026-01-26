"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/home/Testimonials";
import SignupSection from "@/components/auth/SignupSection";

export default function RegisterPage() {
  return (
    <div className="bg-[#191919] min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <SignupSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
