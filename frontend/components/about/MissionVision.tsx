"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function MissionVision() {
  return (
    <section className="px-4 md:px-6 py-20">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">
              Mission <span className="text-white">&</span> Vision
            </h2>
            <p className="text-[#B3B3B3] text-[16px] leading-[1.6] max-w-4xl mx-auto md:mx-0">
              We envision being a leading force in the industry, driven by
              innovation, integrity, and inclusivity, creating a brighter
              financial future for individuals and businesses while maintaining
              a strong commitment to customer satisfaction and community
              development.
            </p>
          </div>
        </ScrollAnimation>

        {/* Mission Section */}
        <ScrollAnimation>
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src="/images/Image Container.png"
                alt="Mission"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-[28px] md:text-[40px] font-medium text-white mb-6">
                Mission
              </h3>
              <p className="text-[#B3B3B3] text-[16px] leading-[1.6]">
                At YourBank, our mission is to empower our customers to achieve
                financial success. We are dedicated to delivering innovative
                banking solutions that cater to their unique needs. Through
                personalized services, expert guidance, and cutting-edge
                technology, we aim to build strong, lasting relationships with
                our customers. Our mission is to be their trusted partner,
                helping them navigate their financial journey and realize their
                dreams.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Vision Section */}
        <ScrollAnimation>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src="/images/Image Container (1).png"
                alt="Vision"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-[28px] md:text-[40px] font-medium text-white mb-6">
                Vision
              </h3>
              <p className="text-[#B3B3B3] text-[16px] leading-[1.6]">
                Our vision at YourBank is to redefine banking by creating a
                seamless and personalized experience for our customers. We
                envision a future where banking is accessible, transparent, and
                tailored to individual preferences. Through continuous
                innovation and collaboration, we strive to be at the forefront
                of the industry, setting new standards for customer-centric
                banking. Our vision is to be the preferred financial
                institution, known for our unwavering commitment to excellence,
                trust, and customer satisfaction.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
