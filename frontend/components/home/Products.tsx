"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

// Product data for Individuals
const individualProducts = [
  {
    icon: "/images/Icon Container.png",
    title: "Checking Accounts",
    description:
      "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
  },
  {
    icon: "/images/Icon Container (1).png",
    title: "Savings Accounts",
    description:
      "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
  },
  {
    icon: "/images/Icon Container (2).png",
    title: "Loans and Mortgages",
    description:
      "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
  },
];

// Product data for Businesses
const businessProducts = [
  {
    icon: "/images/Icon Container.png",
    title: "Business Checking",
    description:
      "Streamline your business finances with our comprehensive business checking solutions. Manage cash flow, make payments, and access funds with ease through our digital banking platform.",
  },
  {
    icon: "/images/Icon Container (1).png",
    title: "Business Loans",
    description:
      "Fuel your business growth with our tailored financing solutions. From startup capital to expansion loans, we provide the financial support your business needs to thrive in today's competitive market.",
  },
  {
    icon: "/images/Icon Container (2).png",
    title: "Merchant Services",
    description:
      "Accept payments seamlessly with our merchant services. From point-of-sale systems to online payment processing, we help you provide a smooth checkout experience for your customers.",
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState<"individuals" | "businesses">(
    "individuals",
  );

  const products =
    activeTab === "individuals" ? individualProducts : businessProducts;

  return (
    <section className=" px-4 py-20 md:px-6">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16 items-center lg:items-start">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-medium text-text-primary mb-4">
                Our <span className="text-primary">Products</span>
              </h2>
              <p className="text-[#B3B3B3] text-[14px] leading-relaxed">
                Discover a range of comprehensive and customizable banking
                products at YourBank, designed to suit your unique financial
                needs and aspirations
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="flex items-center bg-[#262626] border border-[#262626] rounded-full p-[12px] self-center lg:self-start">
              <button
                onClick={() => setActiveTab("individuals")}
                className={`relative px-[18px] py-[10px] rounded-full text-[14px] font-medium transition-colors ${
                  activeTab === "individuals" ? "text-[#1C1C1C]" : "text-[#fff]"
                }`}
              >
                {activeTab === "individuals" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">For Individuals</span>
              </button>
              <button
                onClick={() => setActiveTab("businesses")}
                className={`relative px-6 py-3 rounded-full text-[14px] font-medium transition-colors ${
                  activeTab === "businesses" ? "text-[#1C1C1C]" : "text-[#fff]"
                }`}
              >
                {activeTab === "businesses" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">For Businesses</span>
              </button>
            </div>
          </div>
        </ScrollAnimation>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {products.map((product, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="text-center p-8 border-r border-[#262626] last:border-r-0"
              >
                {/* Icon Container with Animation */}
                <motion.div
                  key={`icon-${activeTab}-${index}`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1 + 0.1,
                  }}
                  className="mx-auto mb-6 w-[78px] h-[78px] relative"
                >
                  <Image
                    src={product.icon}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-[18px] font-semibold text-text-primary mb-4"
                >
                  {product.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-[#B3B3B3] text-[14px] leading-relaxed"
                >
                  {product.description}
                </motion.p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
