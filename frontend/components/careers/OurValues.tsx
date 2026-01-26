"use client";

import ScrollAnimation from "@/components/ui/ScrollAnimation";

const values = [
  {
    title: "Integrity",
    description:
      "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.",
  },
  {
    title: "Customer Centricity",
    description:
      "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.",
  },
  {
    title: "Collaboration",
    description:
      "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.",
  },
  {
    title: "Innovation",
    description:
      "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.",
  },
];

export default function OurValues() {
  return (
    <section className="px-4 md:px-6 py-20">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-[#B3B3B3] text-[16px] leading-[1.6] max-w-4xl mx-auto md:mx-0">
              At YourBank, our values form the foundation of our organization
              and guide our actions. We believe in upholding the highest
              standards of integrity, delivering exceptional service, and
              embracing innovation. These values define our culture and shape
              the way we work together to achieve our goals.
            </p>
          </div>
        </ScrollAnimation>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {values.map((value, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="pl-6 border-l border-primary flex flex-col gap-6">
                <h3 className="text-[32px] md:text-[50px] font-medium text-[#4C4C4D] leading-tight">
                  {value.title}
                </h3>
                <p className="text-[#B3B3B3] text-[16px] leading-[1.6]">
                  {value.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
