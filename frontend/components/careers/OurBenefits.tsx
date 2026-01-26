"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const benefits = [
  {
    title: "Competitive Compensation",
    icon: "/images/b1.png",
    description:
      "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
  },
  {
    title: "Health and Wellness",
    icon: "/images/b2.png",
    description:
      "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
  },
  {
    title: "Retirement Planning",
    icon: "/images/Icon Container (16).png",
    description:
      "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
  },
  {
    title: "Work-Life Balance",
    icon: "/images/Icon Container (17).png",
    description:
      "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
  },
];

export default function OurBenefits() {
  return (
    <section className="px-4 md:px-6 py-20 pt-0">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Our <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-[#B3B3B3] text-[16px] leading-[1.6] max-w-4xl mx-auto md:mx-0">
              At YourBank, we value our employees and are dedicated to their
              well-being and success. We offer a comprehensive range of benefits
              designed to support their personal and professional growth.
            </p>
          </div>
        </ScrollAnimation>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} className="h-full">
              <div className="relative h-full p-[20px] md:p-[50px] rounded-t-[50px] rounded-b-[20px] overflow-hidden border border-[#262626] flex flex-col justify-between group">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/Card.png"
                    alt=""
                    width={729}
                    height={729}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className="flex-shrink-0">
                      <Image
                        src={benefit.icon}
                        alt={benefit.title}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="text-[20px] md:text-[24px] font-medium text-white">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="text-[#B3B3B3] text-[16px] leading-[1.6]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
