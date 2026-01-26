"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function CareersHero() {
  return (
    <section className="px-4 md:px-6 pt-[50px] pb-20">
      <div className="max-w-[1500px] mx-auto rounded-[30px] overflow-hidden bg-[#1C1C1C] border border-[#262626] relative flex flex-col md:block min-h-auto md:min-h-[700px]">
        {/* Background Image */}
        {/* Background Image */}
        <div className="relative w-full h-[350px] md:absolute md:top-[40px] md:right-[40px] md:bottom-[10%] md:w-[50%] md:h-auto z-10 order-1 md:order-none">
          <Image
            src="/images/chero.png"
            alt="Careers at YourBank"
            fill
            className="object-cover md:rounded-[30px]"
            priority
          />
        </div>

        {/* Abstract Pattern */}
        <div className="absolute top-0 right-[-100px] w-[334px] h-[317px] pointer-events-none z-30 block">
          <Image src="/images/cab.png" alt="" fill className="object-contain" />
        </div>

        {/* Content Box */}
        <div className="relative z-20 bg-[#1A1A1A] p-[24px] md:p-12 mt-[-60px] md:mt-[40px] md:ml-[40px] lg:p-[60px] w-full md:max-w-[55%] lg:max-w-[48%] rounded-t-[30px] md:rounded-none md:rounded-br-[100px] md:rounded-bl-[20px] md:rounded-tl-[20px] text-center md:text-left order-2 md:order-none">
          <ScrollAnimation>
            <h1 className="text-white text-3xl md:text-5xl lg:text-[40px] font-medium leading-tight mb-6">
              Welcome to <span className="text-primary">YourBank</span> Careers!
            </h1>
            <p className="text-[#B3B3B3] text-[16px] leading-[1.6]">
              Join our team and embark on a rewarding journey in the banking
              industry. At YourBank, we are committed to fostering a culture of
              excellence and providing opportunities for professional growth.
              With a focus on innovation, customer service, and integrity, we
              strive to make a positive impact in the lives of our customers and
              communities. Join us today and be a part of our mission to shape
              the future of banking.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
