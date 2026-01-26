"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const pressReleases = [
  {
    title:
      "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
    image: "/images/Image (2).png",
    location: "India",
    date: "06/11/2024",
    description:
      "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.",
  },
  {
    title:
      "YourBank Expands Branch Network with Opening of New Location in Chennai",
    image: "/images/Image (3).png",
    location: "India",
    date: "12/11/2024",
    description:
      "YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.",
  },
  {
    title:
      "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
    image: "/images/Image (4).png",
    location: "India",
    date: "24/12/2024",
    description:
      "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
  },
  {
    title:
      "YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility",
    image: "/images/Image (5).png",
    location: "India",
    date: "28/12/2024",
    description:
      "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
  },
];

export default function PressReleases() {
  return (
    <section className="px-4 md:px-6 py-20">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">
              Press Releases
            </h2>
            <p className="text-[#B3B3B3] text-[16px] leading-[1.6] max-w-4xl mx-auto md:mx-0">
              Stay updated with the latest happenings and exciting developments
              at YourBank through our press releases.
            </p>
          </div>
        </ScrollAnimation>

        {/* Press Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pressReleases.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} className="h-full">
              <div className="h-full bg-[#1C1C1C] rounded-[20px] border border-[#262626] p-8 md:p-[40px]">
                {/* Image */}
                <div className="mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[18px] md:text-[20px] font-semibold text-white mb-4 leading-tight">
                  {item.title}
                </h3>

                {/* Location & Date - Same style as JobOpenings */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-[#B3B3B3] text-[14px]">
                  <div className="flex items-center border py-[6px] px-[14px] border-[#262626] rounded-[68px] bg-[#1A1A1A] gap-2">
                    <span>Location: {item.location}</span>
                  </div>
                  <div className="flex items-center border py-[6px] px-[14px] border-[#262626] rounded-[68px] bg-[#1A1A1A] gap-2">
                    <span>Date: {item.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#B3B3B3] text-[14px] leading-[1.6]">
                  {item.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
