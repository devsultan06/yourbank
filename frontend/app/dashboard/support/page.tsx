"use client";

import {
  MessageCircle,
  Phone,
  HelpCircle,
  Search,
  ChevronRight,
} from "lucide-react";

export default function SupportPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-white mb-2">Help & Support</h1>
        <p className="text-[#B3B3B3]">How can we help you today?</p>
      </div>

      {/* Search Hero */}
      <div className="relative bg-gradient-to-r from-[#1C1C1C] to-primary/10 rounded-[30px] p-8 md:p-12 text-center border border-[#262626]">
        <h2 className="text-2xl font-bold text-white mb-6">
          Search our knowledge base
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#59595A]"
            size={20}
          />
          <input
            type="text"
            placeholder="e.g., How to reset password, Transaction limits..."
            className="w-full bg-[#141414] border border-[#333] rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Live Chat */}
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 hover:bg-[#262626] transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
            <MessageCircle size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">24/7 Live Chat</h3>
          <p className="text-[#B3B3B3] text-sm mb-4">
            Chat with our AI assistant or a real human agent instantly.
          </p>
          <span className="text-primary text-sm font-bold flex items-center gap-1">
            Start Chat <ChevronRight size={16} />
          </span>
        </div>

        {/* Phone Support */}
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 hover:bg-[#262626] transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
            <Phone size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
          <p className="text-[#B3B3B3] text-sm mb-4">
            Speak directly with a support specialist.
          </p>
          <span className="text-blue-500 text-sm font-bold flex items-center gap-1">
            View Numbers <ChevronRight size={16} />
          </span>
        </div>

        {/* FAQs */}
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 hover:bg-[#262626] transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 mb-4 group-hover:scale-110 transition-transform">
            <HelpCircle size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">FAQ Center</h3>
          <p className="text-[#B3B3B3] text-sm mb-4">
            Browse common questions and detailed guides.
          </p>
          <span className="text-purple-500 text-sm font-bold flex items-center gap-1">
            Browse Topics <ChevronRight size={16} />
          </span>
        </div>
      </div>

      {/* Common Topics */}
      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-8">
        <h3 className="text-xl font-bold text-white mb-6">Popular Topics</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Reporting a lost card",
            "Disputing a transaction",
            "Changing daily limits",
            "International transfers",
            "Updating personal info",
            "Tax documents",
          ].map((topic, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 bg-[#141414] rounded-xl border border-[#333] hover:border-[#555] cursor-pointer transition-colors"
            >
              <span className="text-white font-medium">{topic}</span>
              <ChevronRight size={16} className="text-[#59595A]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
