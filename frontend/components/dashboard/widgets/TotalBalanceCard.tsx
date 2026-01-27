"use client";

import { useState } from "react";
import { Eye, EyeOff, TrendingUp, ArrowUpRight } from "lucide-react";

export default function TotalBalanceCard() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 md:p-8 hover:border-[#333] transition-colors relative overflow-hidden group h-full flex flex-col justify-between">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors pointer-events-none"></div>

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-[#B3B3B3] text-sm font-medium mb-1">
              Total Balance
            </p>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {showBalance ? "$124,592.00" : "••••••••••"}
              </h2>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="text-[#59595A] hover:text-white transition-colors p-1"
              >
                {showBalance ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>
          <div className="bg-[#CAFF33]/10 px-3 py-1.5 rounded-full flex items-center gap-2 border border-[#CAFF33]/20">
            <TrendingUp size={16} className="text-primary" />
            <span className="text-primary text-xs font-bold">+12.5%</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex-1 bg-primary text-black font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <ArrowUpRight size={18} />
            Top Up
          </button>
          <button className="flex-1 bg-[#262626] text-white font-semibold py-3 rounded-full hover:bg-[#333] transition-colors border border-transparent hover:border-[#404040]">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}
