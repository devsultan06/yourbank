"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function CTA() {
  return (
    <section className="px-4 py-20 md:px-6 ">
      <div className="max-w-[1500px] mx-auto">
        <ScrollAnimation>
          <div className="relative rounded-[20px] overflow-hidden p-8 md:p-16 lg:p-[60px] flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Background Decoration */}
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <Image
                src="/images/CTA Section.png"
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative z-10 max-w-4xl text-center lg:text-left">
              <h2 className="text-[26px] md:text-[28px] lg:text-[30px] font-medium text-text-primary mb-4">
                Start your financial journey with{" "}
                <span className="text-primary">YourBank today!</span>
              </h2>
              <p className="text-[#B3B3B3] text-[16px] leading-[1.6]">
                Lorem ipsum dolor sit amet consectetur. Blandit odio semper
                risus pellentesque elit. Pellentesque eget ut imperdiet nulla
                penatibus. Nascetur viverra arcu sed amet cursus purus.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <Link
                href="/open-account"
                className="inline-block px-8 py-4 bg-primary rounded-full text-[#1C1C1C] font-semibold text-[16px] hover:bg-opacity-90 transition-colors"
              >
                Open Account
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
