import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import UseCases from "@/components/home/UseCases";
import Features from "@/components/home/Features";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <UseCases />
        <Features />
        <FAQ />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
