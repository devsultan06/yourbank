"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Individual use cases - left icons
const individualIcons = [
  {
    icon: "/images/Icon Container (3).png",
    title: "Managing Personal Finances",
  },
  { icon: "/images/Icon Container (4).png", title: "Saving for the Future" },
  { icon: "/images/Icon Container (5).png", title: "Homeownership" },
  { icon: "/images/Icon Container (6).png", title: "Education Funding" },
];

// Individual stats
const individualStats = [
  { value: "78%", label: "Secure Retirement Planning" },
  { value: "63%", label: "Manageable Debt Consolidation" },
  { value: "91%", label: "Reducing financial burdens" },
];

// Business use cases - right icons
const businessIcons = [
  {
    icon: "/images/Icon Container (7).png",
    title: "Startups and Entrepreneurs",
  },
  { icon: "/images/Icon Container (8).png", title: "Cash Flow Management" },
  { icon: "/images/Icon Container (9).png", title: "Business Expansion" },
  { icon: "/images/Icon Container (10).png", title: "Payment Solutions" },
];

// Business stats
const businessStats = [
  { value: "65%", label: "Cash Flow Management" },
  { value: "70%", label: "Drive Business Expansion" },
  { value: "45%", label: "Streamline payroll processing" },
];

export default function UseCases() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-text-primary mb-4">
            <span className="text-primary">Use</span> Cases
          </h2>
          <p className="text-[#B3B3B3] text-[16px] leading-[1.5] max-w-3xl">
            At YourBank, we cater to the diverse needs of individuals and
            businesses alike, offering a wide range of financial solutions
          </p>
        </div>

        {/* For Individuals Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Icon Grid */}
          <div className="bg-[#1C1C1C] rounded-[23px] p-[15px] md:p-[40px] relative overflow-hidden">
            {/* Abstract background - top left */}
            <div className="absolute top-0 left-0 w-[224px] h-[213px] pointer-events-none z-0">
              <Image
                src="/images/ab2.png"
                alt=""
                fill
                className="object-contain "
              />
            </div>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {individualIcons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-[24px] rounded-[12px] border border-[#262626] bg-[#1A1A1A]"
                >
                  <div className="w-[60px] h-[60px] relative mb-4">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[#fff] text-[16px] font-medium">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-medium text-text-primary mb-6">
              For Individuals
            </h3>
            <p className="text-[#B3B3B3] text-[16px] leading-[1.5] mb-8">
              For individuals, our mortgage services pave the way to
              homeownership, and our flexible personal loans provide vital
              support during various life milestones. We also prioritize
              retirement planning, ensuring a financially secure future for our
              customers
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-8 w-full">
              {individualStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center flex flex-col items-center  p-4 md:p-0 rounded-xl md:rounded-none"
                >
                  <p className="text-primary text-5xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[#B3B3B3] text-[16px]">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Learn More Button */}
            <button className="self-center md:self-start px-[20px] py-[14px] border border-[#262626] rounded-full text-[16px] text-[#fff] hover:bg-[#262626] transition-colors w-full md:w-auto">
              Learn More
            </button>
          </div>
        </div>

        {/* For Business Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-medium text-text-primary mb-6">
              For Business
            </h3>
            <p className="text-[#B3B3B3] text-[16px] leading-[1.5] mb-8">
              For businesses, we empower growth with working capital solutions
              that optimize cash flow, and our tailored financing options fuel
              business expansion. Whatever your financial aspirations, YourBank
              is committed to providing the right tools and support to achieve
              them
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-8 w-full">
              {businessStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center flex flex-col items-center md:border-none p-4 md:p-0 rounded-xl md:rounded-none"
                >
                  <p className="text-primary text-5xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[#B3B3B3] text-[16px]">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Learn More Button */}
            <button className="self-center md:self-start px-[20px] py-[14px] border border-[#262626] rounded-full text-[16px] text-[#fff] hover:bg-[#262626] transition-colors w-full md:w-auto">
              Learn More
            </button>
          </div>

          {/* Right - Icon Grid */}
          <div className="bg-[#1C1C1C] rounded-[23px] p-[15px] md:p-[40px] order-1 lg:order-2 relative overflow-hidden">
            {/* Abstract background - top right */}
            <div className="absolute top-0 right-0 w-[213px] h-[213px] pointer-events-none z-0">
              <Image
                src="/images/ab2.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {businessIcons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-[24px] rounded-[12px] border border-[#262626] bg-[#1A1A1A]"
                >
                  <div className="w-[60px] h-[60px] relative mb-4">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[#fff] text-[16px] font-medium">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
