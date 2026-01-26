"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CareersHero from "@/components/careers/CareersHero";
import OurValues from "@/components/careers/OurValues";
import OurBenefits from "@/components/careers/OurBenefits";
import JobOpenings from "@/components/careers/JobOpenings";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function CareersPage() {
  return (
    <div className="bg-[#191919] min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <CareersHero />
        <OurValues />
        <OurBenefits />
        <JobOpenings />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
