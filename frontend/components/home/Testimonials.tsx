"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

// Testimonial data
const testimonials = {
  individuals: [
    {
      text: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
      author: "Sara T",
    },
    {
      text: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
      author: "Emily G",
    },
    {
      text: "Opening an account was so easy and the customer support is amazing. I really feel like they care about my financial well-being unlike other banks I've used.",
      author: "Michael R",
    },
    {
      text: "The interest rates on savings accounts are competitive and the tools to track my spending have really helped me save for my first home.",
      author: "Jessica M",
    },
  ],
  businesses: [
    {
      text: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
      author: "John D",
    },
    {
      text: "The merchant services provided by YourBank have streamlined our payment processing significantly. Our customers appreciate the smooth checkout experience.",
      author: "Robert K",
    },
    {
      text: "We used a business loan to expand our operations and the process was seamless. The rates were great and the support team walked us through every step.",
      author: "Amanda L",
    },
    {
      text: "Managing cash flow has never been easier thanks to the robust dashboard provided by YourBank properly tailored for small businesses.",
      author: "David W",
    },
  ],
};

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<"individuals" | "businesses">(
    "individuals",
  );
  const swiperRef = useRef<any>(null);

  const activeTestimonials = testimonials[activeTab];

  return (
    <section className="px-4 py-20 md:px-6">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-medium text-text-primary mb-4">
              Our <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-[#B3B3B3] text-[16px] leading-[1.5]">
              Discover how YourBank has transformed lives with innovative
              digital solutions and personalized customer service. See why our
              clients trust us for a secure and prosperous financial journey
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center bg-[#262626] border border-[#262626] rounded-full p-[12px] self-center lg:self-end">
            <button
              onClick={() => setActiveTab("individuals")}
              className={`relative px-6 py-3 rounded-full text-[14px] font-medium transition-colors ${
                activeTab === "individuals"
                  ? "bg-primary text-[#1C1C1C]"
                  : "bg-[#262626] text-[#fff]"
              }`}
            >
              For Individuals
            </button>
            <button
              onClick={() => setActiveTab("businesses")}
              className={`relative px-6 py-3 rounded-full text-[14px] font-medium transition-colors ${
                activeTab === "businesses"
                  ? "bg-primary text-[#1C1C1C]"
                  : "text-[#fff]"
              }`}
            >
              For Businesses
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="!pb-12"
          >
            {activeTestimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="h-full flex flex-col items-center text-center p-8">
                  {/* Quote Icon */}
                  <div className="mb-8">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6667 25C11.6667 22.2386 13.9052 20 16.6667 20H18.3333V11.6667H11.6667C8.90524 11.6667 6.66666 13.9052 6.66666 16.6667V28.3333H15V25H11.6667ZM28.3333 25C28.3333 22.2386 30.5719 20 33.3333 20H35V11.6667H28.3333C25.5719 11.6667 23.3333 13.9052 23.3333 16.6667V28.3333H31.6667V25H28.3333Z"
                        fill="#CAFF33"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <p className="text-[#B3B3B3] text-[16px] leading-[1.6] mb-8 flex-grow">
                    {testimonial.text}
                  </p>

                  {/* Author */}
                  <p className="text-primary font-medium text-[16px]">
                    {testimonial.author}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center text-[#CAFF33] hover:bg-[#262626] transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-[#262626] flex items-center justify-center text-[#CAFF33] hover:bg-[#262626] transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
