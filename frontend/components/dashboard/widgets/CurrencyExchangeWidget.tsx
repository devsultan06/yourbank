"use client";

import { ArrowDownUp, Settings2 } from "lucide-react";
import { useState } from "react";

export default function CurrencyExchangeWidget() {
  const [slippage, setSlippage] = useState("0.5");
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 h-full relative">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-white font-semibold">Exchange</h3>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="text-[#59595A] hover:text-white transition-colors"
        >
          <Settings2 size={20} />
        </button>
      </div>

      {showSettings && (
        <div className="absolute top-16 right-6 bg-[#262626] border border-[#333] rounded-xl p-4 z-20 shadow-xl w-48">
          <label className="text-xs text-[#B3B3B3] mb-2 block">
            Slippage Tolerance
          </label>
          <div className="flex gap-2">
            {["0.1", "0.5", "1.0"].map((val) => (
              <button
                key={val}
                onClick={() => setSlippage(val)}
                className={`flex-1 py-1 text-xs rounded-lg border ${slippage === val ? "bg-primary text-black border-primary" : "bg-transparent text-white border-[#404040]"}`}
              >
                {val}%
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2">
        {/* From */}
        <div className="bg-[#141414] rounded-2xl p-4 border border-[#262626] relative group hover:border-[#333] transition-colors">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-[#59595A]">From</span>
            <span className="text-xs text-[#B3B3B3]">Balance: $12,450.00</span>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="number"
              placeholder="0.00"
              className="bg-transparent text-2xl font-bold text-white w-2/3 focus:outline-none placeholder:text-[#333]"
            />
            <div className="bg-[#262626] rounded-full px-3 py-1.5 flex items-center gap-2 cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium text-white">USD</span>
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-3 relative z-10">
          <button className="bg-[#262626] border border-[#333] p-2 rounded-full text-white hover:text-primary transition-colors">
            <ArrowDownUp size={18} />
          </button>
        </div>

        {/* To */}
        <div className="bg-[#141414] rounded-2xl p-4 border border-[#262626] relative group hover:border-[#333] transition-colors">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-[#59595A]">To (Estimate)</span>
            <span className="text-xs text-[#B3B3B3]">
              Rate: 1 USD ≈ 0.92 EUR
            </span>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="number"
              placeholder="0.00"
              className="bg-transparent text-2xl font-bold text-primary w-2/3 focus:outline-none placeholder:text-[#333]"
              readOnly
            />
            <div className="bg-[#262626] rounded-full px-3 py-1.5 flex items-center gap-2 cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-blue-500"></div>
              <span className="text-sm font-medium text-white">EUR</span>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full bg-white text-black font-bold py-4 rounded-2xl mt-6 hover:bg-gray-200 transition-colors">
        Confirm Exchange
      </button>
    </div>
  );
}
