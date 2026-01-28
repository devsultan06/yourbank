"use client";

import { Search, Bell, Menu, ChevronDown, User } from "lucide-react";
import Image from "next/image";

export default function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-30 w-full bg-[#1C1C1C]/80 backdrop-blur-xl border-b border-[#262626] h-20">
      <div className="flex items-center justify-between h-full px-6 md:px-8">
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={onMenuClick}
            className="text-white p-2 hover:bg-[#262626] rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          <span className="text-lg font-bold text-white">Dashboard</span>
        </div>

        <div className="hidden lg:flex items-center flex-1 max-w-xl">
          <div className="relative w-full group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#59595A] group-focus-within:text-primary transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search transactions, cards, or help..."
              className="w-full bg-[#1A1A1A] border border-[#262626] rounded-full pl-12 pr-4 py-3 text-white placeholder:text-[#59595A] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="relative p-2 text-[#B3B3B3] hover:text-white transition-colors">
            <Bell size={22} />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-primary rounded-full ring-2 ring-[#1C1C1C]"></span>
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-[#262626]">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-white">Sultan Abaniks</p>
              <p className="text-xs text-[#B3B3B3]">Premium Member</p>
            </div>
            <button className="flex items-center gap-2 hover:bg-[#262626] p-1.5 rounded-full pr-3 transition-colors border border-transparent hover:border-[#262626]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-green-600 flex items-center justify-center text-black font-bold">
                SA
              </div>
              <ChevronDown size={16} className="text-[#B3B3B3]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
