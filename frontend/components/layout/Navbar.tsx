"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Careers", href: "/careers" },
  { name: "About", href: "/about" },
  { name: "Security", href: "/security" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="absolute top-0 left-0 w-[546px] h-[400px] pointer-events-none z-0">
        <Image
          src="/images/behind.png"
          alt=""
          fill
          className="object-contain object-left-top"
          priority
        />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto flex items-center justify-between bg-[#1C1C1C] border border-border rounded-full px-[24px] py-[14px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/images/logo.svg"
            alt="YourBank Logo"
            width={30}
            height={30}
          />
          <Image
            src="/images/YourBanK.svg"
            alt="YourBank"
            width={83}
            height={13}
            className=""
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex  items-center ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-[18px] py-[10px] text-[14px] text-text-primary rounded-full transition-all duration-150 ${
                activeLink === link.name
                  ? "bg-surface-light  font-medium"
                  : "hover:text-text-primary"
              }`}
              onClick={() => setActiveLink(link.name)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/auth/register"
            className="text-[14px] text-text-primary hover:text-primary transition-colors"
          >
            Sign Up
          </Link>
          <Link
            href="/auth/login"
            className="px-[24px] py-[12px] text-[14px]  text-[#1C1C1C] bg-primary hover:bg-primary-hover rounded-full transition-all duration-150 hover:-translate-y-0.5"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`block h-0.5 w-full bg-text-primary rounded transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-text-primary rounded transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-text-primary rounded transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-4 right-4 mt-2 bg-surface border border-border rounded-2xl p-6 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 mb-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-3 text-base rounded-xl transition-all ${
                activeLink === link.name
                  ? "bg-surface-light text-text-primary"
                  : "text-text-secondary hover:bg-surface-light hover:text-text-primary"
              }`}
              onClick={() => {
                setActiveLink(link.name);
                setIsMobileMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 pt-4 border-t border-border">
          <Link
            href="/auth/register"
            className="text-center py-3 text-text-primary hover:text-primary transition-colors"
          >
            Sign Up
          </Link>
          <Link
            href="/auth/login"
            className="text-center py-3.5 font-medium text-background bg-primary hover:bg-primary-hover rounded-full transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
