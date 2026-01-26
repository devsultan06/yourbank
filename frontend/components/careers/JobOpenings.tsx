"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const jobs = [
  {
    title: "Relationship Manager",
    location: "India",
    department: "Retail Banking",
    about:
      "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.",
    requirements: [
      "Bachelor's degree in Business, Finance, or a related field",
      "Minimum of 3 years of experience in sales or relationship management in the banking industry",
      "Proven track record of meeting and exceeding sales targets",
      "Excellent interpersonal and negotiation skills",
      "Strong knowledge of banking products and services",
    ],
  },
  {
    title: "Risk Analyst",
    location: "India",
    department: "Risk Management",
    about:
      "As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.",
    requirements: [
      "Bachelor's degree in Finance, Economics, or a related field",
      "Minimum of 2 years of experience in risk management or a similar role",
      "Proficiency in risk analysis tools and techniques",
      "Strong analytical and problem-solving skills",
      "Knowledge of regulatory requirements and industry best practices",
    ],
  },
  {
    title: "IT Security Specialist",
    location: "India",
    department: "Information Technology",
    about:
      "As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.",
    requirements: [
      "Bachelor's degree in Computer Science, Information Security, or a related field",
      "Minimum of 5 years of experience in IT security or a similar role",
      "In-depth knowledge of network security protocols and technologies",
      "Familiarity with regulatory frameworks such as PCI DSS and GDPR",
      "Professional certifications such as CISSP or CISM are preferred",
    ],
  },
];

export default function JobOpenings() {
  return (
    <section className="px-4 md:px-6 py-20">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">
              Job Openings
            </h2>
            <p className="text-[#B3B3B3] text-[16px] leading-[1.6] max-w-4xl mx-auto md:mx-0">
              Explore exciting job openings at YourBank, where we value talent,
              innovation, and a passion for customer service. Join our team and
              be part of shaping a brighter future in the banking industry.
            </p>
          </div>
        </ScrollAnimation>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} className="h-full">
              <div className="h-full bg-[#1C1C1C] rounded-[20px] border border-[#262626] p-8 md:p-[40px]">
                {/* Job Title */}
                <h3 className="text-[20px] md:text-[24px] font-semibold text-white mb-4">
                  {job.title}
                </h3>

                {/* Location & Department */}
                <div className="flex flex-wrap items-center gap-4 mb-8 text-[#B3B3B3] text-[14px]">
                  <div className="flex items-center border py-[6px] px-[14px] border-[#262626] rounded-[68px] bg-[#1A1A1A] gap-2">
                  
                    <span>Location: {job.location}</span>
                  </div>
                  <div className="flex items-center border py-[6px] px-[14px] border-[#262626] rounded-[68px] bg-[#1A1A1A] gap-2">
                   
                    <span>Department: {job.department}</span>
                  </div>
                </div>

                {/* About This Job */}
                <div className="mb-8">
                  <h4 className="text-[16px] font-medium text-white mb-4">
                    About This Job
                  </h4>
                  <p className="text-[#B3B3B3] text-[14px] leading-[1.6]">
                    {job.about}
                  </p>
                </div>

                {/* Requirements */}
                <div className="mb-8">
                  <h4 className="text-[16px] font-medium text-white mb-4">
                    Requirements & Qualifications
                  </h4>
                  <ul className="space-y-3">
                    {job.requirements.map((req, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-[14px] text-[#B3B3B3] text-[14px]"
                      >
                        <Image
                          src="/images/briefcase.fill.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="mt-1 flex-shrink-0"
                        />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <button className="bg-[#1C1C1C] border border-primary text-primary font-medium rounded-full px-8 py-3 text-[14px] hover:bg-primary hover:text-[#1C1C1C] transition-all">
                  Apply Now
                </button>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
