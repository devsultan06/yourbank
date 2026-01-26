"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SecurityHero from "@/components/security/SecurityHero";
import HowWeProtect from "@/components/security/HowWeProtect";

export default function SecurityPage() {
  return (
    <div className="bg-[#191919] min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <SecurityHero />
        <HowWeProtect />
      </main>
      <Footer />
    </div>
  );
}
