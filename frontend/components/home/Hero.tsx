"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

// Transaction data - extended list for continuous animation
const allTransactions = [
  { name: "Joel Kenley", amount: "-$68.00" },
  { name: "Mark Smith", amount: "-$68.00" },
  { name: "Lenen Roy", amount: "-$68.00" },
  { name: "Sarah Chen", amount: "-$125.00" },
  { name: "Alex Johnson", amount: "-$42.50" },
  { name: "Emma Wilson", amount: "-$89.00" },
];

// Currency icons - using actual images
const currencies = [
  { image: "/images/Shape.png", alt: "Dollar" },
  { image: "/images/Shape (1).png", alt: "Euro" },
  { image: "/images/Shape (2).png", alt: "Bitcoin" },
  { image: "/images/Group.png", alt: "Ethereum" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Monthly income values for animation
  const incomeValues = [
    "+ $5000,00",
    "+ $3,250.00",
    "+ $7,800.00",
    "+ $4,125.50",
    "+ $6,490.00",
    "+ $2,875.00",
  ];

  // Play subtle transaction notification sound
  const playTransactionSound = useCallback(() => {
    try {
      // Create audio context on first interaction
      if (!audioContextRef.current) {
        audioContextRef.current = new (
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext
        )();
      }
      const ctx = audioContextRef.current;

      // Create oscillator for a subtle "ding" sound
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      // High-pitched subtle ding
      oscillator.frequency.setValueAtTime(880, ctx.currentTime); // A5 note
      oscillator.frequency.exponentialRampToValueAtTime(
        1760,
        ctx.currentTime + 0.05,
      ); // Quick rise
      oscillator.frequency.exponentialRampToValueAtTime(
        1320,
        ctx.currentTime + 0.1,
      ); // Settle

      oscillator.type = "sine";

      // Quick fade in and out for subtle effect
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.02); // Very quiet
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.15);
    } catch {
      // Silently fail if audio not supported
    }
  }, []);

  // Get 3 transactions starting from current index
  const visibleTransactions = [
    allTransactions[currentIndex % allTransactions.length],
    allTransactions[(currentIndex + 1) % allTransactions.length],
    allTransactions[(currentIndex + 2) % allTransactions.length],
  ];

  // Rotate transactions every 1.5 seconds (faster) and play sound
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allTransactions.length);
      if (soundEnabled) {
        playTransactionSound();
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [playTransactionSound, soundEnabled]);

  return (
    <section className="relative min-h-screen pt-[180px] pb-20 px-4 md:px-6 overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-[400px] items-start">
          {/* Left Content */}
          <div className="space-y-8 max-w-[600px] mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#262626]  rounded-[61px] px-[16px] py-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.16907 3.16563C7.85588 2.37578 8.86943 1.875 10 1.875C11.1305 1.875 12.144 2.37573 12.8308 3.16551C13.8751 3.09255 14.946 3.45513 15.7455 4.25464C16.545 5.05415 16.9076 6.12507 16.8347 7.16933C17.6243 7.85613 18.125 8.86957 18.125 10C18.125 11.1306 17.6242 12.1443 16.8342 12.8311C16.907 13.8751 16.5444 14.9458 15.7451 15.7452C14.9457 16.5446 13.875 16.9072 12.8309 16.8344C12.1441 17.6242 11.1306 18.125 10 18.125C8.8695 18.125 7.856 17.6243 7.1692 16.8345C6.12493 16.9075 5.054 16.5449 4.25448 15.7454C3.45496 14.9459 3.09238 13.8749 3.16534 12.8307C2.37565 12.1439 1.875 11.1304 1.875 10C1.875 8.86951 2.37571 7.85602 3.16546 7.16921C3.09258 6.12504 3.45517 5.05423 4.25462 4.25478C5.05406 3.45533 6.12489 3.09274 7.16907 3.16563ZM13.0086 8.48827C13.2092 8.20739 13.1442 7.81705 12.8633 7.61642C12.5824 7.41579 12.192 7.48084 11.9914 7.76173L9.29525 11.5364L7.94194 10.1831C7.69786 9.93898 7.30214 9.93898 7.05806 10.1831C6.81398 10.4271 6.81398 10.8229 7.05806 11.0669L8.93306 12.9419C9.06297 13.0719 9.24346 13.138 9.42655 13.1229C9.60964 13.1077 9.7768 13.0128 9.88358 12.8633L13.0086 8.48827Z"
                  fill="#CAFF33"
                />
              </svg>
              <span className="text-[14px] text-[#fff]">
                No LLC Required, No Credit Check.
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-[40px] font-medium text-text-primary">
              <span className="block leading-[1.5]">Welcome to YourBank</span>
              <span className="block  leading-[1.5]">
                Empowering Your{" "}
                <span className="text-primary">Financial Journey</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#E4E4E7] text-base md:text-[16px] leading-[30px] max-w-xl">
              At YourBank, our mission is to provide comprehensive banking
              solutions that empower individuals and businesses to achieve their
              financial goals. We are committed to delivering personalized and
              innovative services that prioritize our customers&apos; needs.
            </p>

            {/* CTA Button */}
            <Link
              href="/auth/register"
              className="inline-block px-[24px] py-[14px] text-[14px] font-medium text-[#1C1C1C] bg-primary hover:bg-primary-hover rounded-full transition-all duration-200 hover:-translate-y-0.5"
            >
              Open Account
            </Link>
          </div>

          {/* Right Content - Dashboard Cards */}
          <div className="relative lg:pl-8 flex flex-col items-center lg:items-start">
            {/* Abstract background - positioned behind the cards */}
            <div className="absolute top-0 right-0 lg:top-9 lg:right-9 w-[250px] h-[230px] lg:w-[300px] lg:h-[275px] pointer-events-none z-0">
              <Image
                src="/images/abstract2.png"
                alt=""
                fill
                className="object-contain opacity-70"
              />
            </div>

            <div className="relative z-10 w-full max-w-[410px]">
              {/* Monthly Income Card - Overlapping */}
              <div className="relative z-20 inline-flex items-center gap-3 bg-[#22251B] border border-border rounded-xl px-[13px] py-[11px] mb-[-20px] ml-0 lg:ml-[-40px]">
                <motion.div
                  className="p-[7px] bg-[#CAFF33] rounded-[36px] flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                  }}
                >
                  <Image
                    src="/images/add.png"
                    alt=""
                    width={9}
                    height={9}
                    className="object-contain opacity-70"
                  />
                </motion.div>
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentIndex}
                      className="text-[#fff] text-[14px]"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {incomeValues[currentIndex % incomeValues.length]}
                    </motion.p>
                  </AnimatePresence>
                  <p className="text-[#E4E4E7] text-[11px]">Monthly Income</p>
                </div>
              </div>

              {/* Main Dashboard Card */}
              <div
                className="rounded-[8px] border border-[#262626] p-6 space-y-6 max-w-[410px]"
                style={{
                  background:
                    "linear-gradient(215deg, rgba(26, 26, 26, 0.00) 0%, #1A1A1A 39.72%), #1A1A1A",
                  backgroundBlendMode: "normal, normal",
                }}
              >
                {/* Transactions Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-text-primary font-semibold text-[14px]">
                      Your Transactions
                    </h3>
                    {/* Sound Toggle Button */}
                    <button
                      onClick={() => setSoundEnabled(!soundEnabled)}
                      className="p-1.5 rounded-full hover:bg-[#262626] transition-colors"
                      title={soundEnabled ? "Mute sounds" : "Enable sounds"}
                    >
                      {soundEnabled ? (
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 text-[#666]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  {/* Animated Cascading transactions */}
                  <div className="relative flex flex-col items-center overflow-hidden">
                    <AnimatePresence mode="popLayout">
                      {visibleTransactions.map((tx, index) => (
                        <motion.div
                          key={`${tx.name}-${currentIndex}-${index}`}
                          initial={{
                            opacity: 0,
                            y: -20,
                            scale: 0.95,
                          }}
                          animate={{
                            opacity: index === 0 ? 1 : index === 1 ? 0.8 : 0.6,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            y: 20,
                            scale: 0.95,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                            delay: index * 0.05,
                          }}
                          className={`flex items-center justify-between p-3 rounded-lg border border-[#262626] bg-[#1C1C1C] w-full ${
                            index === 0
                              ? "relative z-30"
                              : index === 1
                                ? "relative z-20 -mt-2 max-w-[95%]"
                                : "relative z-10 -mt-2 max-w-[90%]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <motion.div
                              className="p-[7px] bg-[#CAFF33] rounded-[36px] flex items-center justify-center"
                              initial={{ rotate: -180 }}
                              animate={{ rotate: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.05,
                              }}
                            >
                              <Image
                                src="/images/swap.png"
                                alt=""
                                width={9}
                                height={9}
                                className="object-contain opacity-70"
                              />
                            </motion.div>
                            <div>
                              <p className="text-[#fff] text-[12px]">
                                Transaction
                              </p>
                              <p className="text-[#fff] text-[13px] font-medium">
                                {tx.name}
                              </p>
                            </div>
                          </div>
                          <motion.p
                            className="text-[#fff] text-[16px] font-medium"
                            initial={{ x: 15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                              duration: 0.25,
                              delay: 0.1 + index * 0.05,
                            }}
                          >
                            {tx.amount}
                          </motion.p>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Money Exchange Section */}
                <div>
                  <h3 className="text-text-primary font-semibold text-[14px] mb-4">
                    Money Exchange
                  </h3>
                  <div className="border border-[#262626] rounded-xl overflow-hidden">
                    <div className="grid grid-cols-2">
                      {/* Top Left - INR */}
                      <div className="p-4 border-r border-b border-[#262626]">
                        <div className="flex items-center gap-2 mb-2">
                          <Image
                            src="/images/Image.png"
                            alt="INR"
                            width={28}
                            height={28}
                            className="rounded-full"
                          />
                          <span className="text-[#fff] text-[14px] font-medium">
                            INR
                          </span>
                        </div>
                        <p className="text-[#B3B3B3] text-[12px]">
                          Indian Rupees
                        </p>
                      </div>
                      {/* Top Right - USD */}
                      <div className="p-4 border-b border-[#262626]">
                        <div className="flex items-center gap-2 mb-2">
                          <Image
                            src="/images/Image (1).png"
                            alt="USD"
                            width={28}
                            height={28}
                            className="rounded-full"
                          />
                          <span className="text-[#fff] text-[14px] font-medium">
                            USD
                          </span>
                        </div>
                        <p className="text-[#B3B3B3] text-[12px]">
                          United States Dollar
                        </p>
                      </div>
                      {/* Bottom Left - INR Amount */}
                      <div className="p-4 border-r border-[#262626]">
                        <p className="text-[#fff] font-semibold text-[18px]">
                          5,0000
                        </p>
                      </div>
                      {/* Bottom Right - USD Amount */}
                      <div className="p-4">
                        <p className="text-[#fff] font-semibold text-[18px]">
                          12.00
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Exchange Button */}
                  <button className="w-full py-[11px] mt-4 bg-[#22251B] hover:bg-[#333333] text-[#D1FF4D] text-[13px] font-medium rounded-full transition-colors">
                    Exchange
                  </button>
                </div>
              </div>

              {/* Supported Currency - Outside main card */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="flex items-center gap-3 bg-[#22251B] rounded-[55px] px-5 py-3">
                  <span className="text-[#fff] text-[12px]">
                    Supported Currency
                  </span>
                  <div className="flex items-center bg-[#1A1A1A] rounded-[37px] border border-[#262626] p-[6px] gap-2">
                    {currencies.map((curr, index) => (
                      <div
                        key={index}
                        className="w-[27px] h-[27px] bg-[#262626] rounded-full flex items-center justify-center"
                      >
                        <Image
                          src={curr.image}
                          alt={curr.alt}
                          width={8}
                          height={13}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
