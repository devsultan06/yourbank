"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/home/Testimonials";
import LoginSection from "@/components/auth/LoginSection";

export default function LoginPage() {
  return (
    <div className="bg-[#191919] min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <LoginSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
