"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const faqs = [
  {
    question: "How do I open an account with YourBank?",
    answer:
      'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
  },
  {
    question: "What documents do I need to provide to apply for a loan?",
    answer:
      "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
  },
  {
    question: "How can I access my accounts online?",
    answer:
      'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven\'t registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.',
  },
  {
    question: "Are my transactions and personal information secure?",
    answer:
      "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
  },
  {
    question: "What are the fees associated with checking accounts?",
    answer:
      "Our checking accounts are designed to be affordable. Standard accounts have no monthly maintenance fees if you meet minimum balance requirements or set up direct deposit. Student and senior accounts have no monthly fees. Please check our fee schedule for details on overdrafts, wire transfers, and foreign transaction fees.",
  },
  {
    question: "How do I report a lost or stolen card?",
    answer:
      "If your card is lost or stolen, please report it immediately through our mobile app or by calling our 24/7 customer service line. You can also temporarily lock your card instantly through the mobile app to prevent unauthorized charges while you look for it.",
  },
  {
    question: "Can I use YourBank ATMs internationally?",
    answer:
      "Yes, YourBank cards are accepted worldwide. We offer fee-free withdrawals at over 50,000 partner ATMs globally. For out-of-network international ATMs, a small fee may apply, plus any fees charged by the ATM operator. Check our app for a map of fee-free ATMs near your destination.",
  },
  {
    question: "How do I set up automatic bill payments?",
    answer:
      "Setting up automatic payments is easy in our online banking portal. Simply go to the 'Bill Pay' section, select your payee, choose 'AutoPay', and enter the amount and frequency. You'll receive email notifications before each payment is processed so you stay in control.",
  },
];

export default function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="px-4 py-20 md:px-6">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-medium text-text-primary mb-4">
              <span className="text-primary">Frequently</span> Asked Questions
            </h2>
            <p className="text-[#B3B3B3] text-[16px] leading-[1.5] max-w-4xl mx-auto lg:mx-0">
              Still you have any questions? Contact our Team via
              support@yourbank.com
            </p>
          </div>
        </ScrollAnimation>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {visibleFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[16px] border border-[#262626]"
            >
              <h3 className="text-[18px] font-semibold text-text-primary mb-6 border-b border-[#262626] pb-4">
                {faq.question}
              </h3>
              <p className="text-[#B3B3B3] text-[14px] leading-[1.6]">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Load All Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-3 border border-[#262626] rounded-full text-[14px] text-[#fff] bg-[#1C1C1C] hover:bg-[#262626] transition-colors"
          >
            {showAll ? "Show Less" : "Load All FAQ's"}
            <svg
              className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
