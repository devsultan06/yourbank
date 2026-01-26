"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import PressReleases from "@/components/about/PressReleases";

export default function AboutPage() {
  return (
    <div className="bg-[#191919] min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <AboutHero />
        <MissionVision />
        <PressReleases />
      </main>
      <Footer />
    </div>
  );
}
