"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] pt-20 pb-8 border-t border-[#262626]">
      <div className="max-w-[1500px] mx-auto px-4 md:px-6 relative overflow-hidden">
        {/* Logo and Nav */}
        <div className="flex flex-col items-center justify-center mb-12">
          {/* Logo */}
          <Link href="/" className="mb-8 flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="YourBank"
              width={28}
              height={28}
              className="h-8 w-auto"
            />
                <Image
              src="/images/YourBank.svg"
              alt="YourBank"
              width={94}
              height={15}
              className="w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 md:gap-8">
            <Link
              href="/"
              className="text-[#fff] hover:text-primary transition-colors text-[16px]"
            >
              Home
            </Link>
            <Link
              href="/careers"
              className="text-[#fff] hover:text-primary transition-colors text-[16px]"
            >
              Careers
            </Link>
            <Link
              href="/about"
              className="text-[#fff] hover:text-primary transition-colors text-[16px]"
            >
              About
            </Link>
            <Link
              href="/security"
              className="text-[#fff] hover:text-primary transition-colors text-[16px]"
            >
              Security
            </Link>
          </nav>
        </div>

        {/* Separator - Dashed Line */}
        <div className="border-t border-dashed border-[#262626] mb-12"></div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
          {/* Email */}
          <div className="flex items-center gap-2">
            <Image src="/images/Icon (4).svg" alt="" width={20} height={20} />
            <a
              href="mailto:hello@skillbridge.com"
              className="text-[#fff] hover:text-primary transition-colors"
            >
              hello@skillbridge.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Image src="/images/Icon (5).svg" alt="" width={20} height={20} />
            <a
              href="tel:+9191813232309"
              className="text-[#fff] hover:text-primary transition-colors"
            >
              +91 91813 23 2309
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <Image src="/images/Icon (6).svg" alt="" width={20} height={20} />
            <span className="text-[#fff]">Somewhere in the World</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#1A1A1A] rounded-full p-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#262626]">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-[#1C1C1C] hover:opacity-90 transition-opacity"
            >
              <Image
                src="/images/Icon (1).svg"
                alt="Facebook"
                width={20}
                height={20}
                className="invert-0"
              />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-[#1C1C1C] hover:opacity-90 transition-opacity"
            >
              <Image
                src="/images/Icon (2).svg"
                alt="Twitter"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-[#1C1C1C] hover:opacity-90 transition-opacity"
            >
              <Image
                src="/images/Icon (3).svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-[#B3B3B3] text-[14px]">
            YourBank All Rights Reserved
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 text-[#B3B3B3] text-[14px]">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="w-[1px] h-4 bg-[#B3B3B3]"></span>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
