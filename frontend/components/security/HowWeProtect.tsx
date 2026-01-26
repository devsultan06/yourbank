"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const protectionFeatures = [
  {
    title: "Secure Online Banking Platform",
    icon: "/images/Icon Container (18).png",
    description:
      "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
  },
  {
    title: "Multi-Factor Authentication",
    icon: "/images/Icon Container (19).png",
    description:
      "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.",
  },
  {
    title: "Fraud Monitoring",
    icon: "/images/Icon Container (20).png",
    description:
      "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.",
  },
  {
    title: "Secure Mobile Banking",
    icon: "/images/Icon Container (21).png",
    description:
      "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.",
  },
];

export default function HowWeProtect() {
  return (
    <section className="px-4 md:px-6 py-20">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              How We <span className="text-primary">Protect You</span>
            </h2>
            <p className="text-[#B3B3B3] text-[16px] leading-[1.6] max-w-4xl mx-auto md:mx-0">
              At YourBank, we prioritize the security and confidentiality of
              your financial information. Our state-of-the-art encryption
              technology and stringent data protection measures ensure your
              assets and transactions are safeguarded at all times.
            </p>
          </div>
        </ScrollAnimation>

        {/* Container with cards extending beyond */}
        <div className="relative py-12">
          {/* Background Box - starts at top, shorter at bottom so cards extend down */}
          <div className="absolute inset-x-0 top-0 bottom-[80px] bg-[#1C1C1C] border border-[#262626] rounded-[20px]" />

          {/* Grid of cards - extends beyond the background box */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
            {protectionFeatures.map((feature, index) => (
              <ScrollAnimation
                key={index}
                delay={index * 0.1}
                className="h-full"
              >
                <div className="h-full bg-[#191919] rounded-[20px] border border-[#262626] p-8 md:p-10">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={60}
                      height={60}
                    />
                    <h3 className="text-[18px] md:text-[20px] font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#B3B3B3] text-[14px] leading-[1.6]">
                    {feature.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
