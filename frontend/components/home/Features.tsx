"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

// Feature tabs
const tabs = ["Online Banking", "Financial Tools", "Customer Support"];

// Features data for each tab
const featuresData = {
  "Online Banking": [
    {
      title: "24/7 Account Access",
      description:
        "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
    },
    {
      title: "Mobile Banking App",
      description:
        "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
    },
    {
      title: "Secure Transactions",
      description:
        "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
    },
    {
      title: "Bill Pay and Transfers",
      description:
        "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
    },
  ],
  "Financial Tools": [
    {
      title: "Budget Planning",
      description:
        "Take control of your finances with our intuitive budgeting tools. Track your spending, set savings goals, and get insights into your financial habits.",
    },
    {
      title: "Investment Tracking",
      description:
        "Monitor your investment portfolio in real-time. Get detailed analytics, performance reports, and personalized recommendations to grow your wealth.",
    },
    {
      title: "Tax Preparation",
      description:
        "Simplify tax season with our integrated tax preparation tools. Export statements, track deductions, and stay organized throughout the year.",
    },
    {
      title: "Financial Reports",
      description:
        "Access comprehensive financial reports and analytics. Understand your cash flow, identify trends, and make informed financial decisions.",
    },
  ],
  "Customer Support": [
    {
      title: "24/7 Live Chat",
      description:
        "Get instant help from our dedicated support team anytime. Our live chat feature connects you with real people who can answer your questions.",
    },
    {
      title: "Phone Support",
      description:
        "Speak directly with our knowledgeable customer service representatives. We're here to help with any account issues or questions you may have.",
    },
    {
      title: "Help Center",
      description:
        "Find answers quickly in our comprehensive help center. Browse FAQs, tutorials, and guides to resolve common issues on your own.",
    },
    {
      title: "Branch Locator",
      description:
        "Find the nearest YourBank branch or ATM. Get directions, hours of operation, and available services at each location.",
    },
  ],
};

export default function Features() {
  const [activeTab, setActiveTab] = useState("Online Banking");

  const features = featuresData[activeTab as keyof typeof featuresData];

  return (
    <section className="px-4 py-20 md:px-6">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-medium text-text-primary mb-4">
              Our <span className="text-primary">Features</span>
            </h2>
            <p className="text-[#B3B3B3] text-[16px] leading-[1.5] max-w-4xl mx-auto lg:mx-0">
              Experience a host of powerful features at YourBank, including
              seamless online banking, secure transactions, and personalized
              financial insights, all designed to enhance your banking
              experience
            </p>
          </div>
        </ScrollAnimation>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Tabs */}
          <div className="flex flex-row lg:flex-col gap-4 lg:w-[200px] flex-shrink-0 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-4 rounded-full text-[14px] font-medium transition-all text-left whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab
                    ? "bg-primary text-[#1C1C1C]"
                    : "bg-[#1C1C1C] border border-[#262626] text-[#fff] hover:bg-[#262626]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Right - Feature Cards Grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-[16px] border border-[#262626] bg-[#1C1C1C] relative"
                  >
                    {/* Arrow Icon */}
                    <div className="absolute top-8 right-8">
                      <Image
                        src="/images/feature.svg"
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>

                    <h3 className="text-[18px] font-semibold text-text-primary mb-4 pr-12">
                      {feature.title}
                    </h3>
                    <p className="text-[#B3B3B3] text-[14px] leading-[1.6]">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
