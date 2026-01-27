"use client";

import { Sliders, Shield } from "lucide-react";
import { useState } from "react";

export default function LimitsPage() {
  const [dailyLimit, setDailyLimit] = useState(5000);
  const [atmLimit, setAtmLimit] = useState(1000);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-white mb-2">Spending Limits</h1>

      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-8">
        <div className="flex items-center gap-3 mb-8">
          <Sliders className="text-primary" />
          <div>
            <h3 className="text-white font-bold text-lg">
              Daily Transaction Limits
            </h3>
            <p className="text-[#59595A] text-sm">
              Control how much can be spent per day.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Online Spending */}
          <div>
            <div className="flex justify-between text-white mb-4">
              <span className="font-medium">Online Purchases</span>
              <span className="font-bold">${dailyLimit.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="10000"
              step="100"
              value={dailyLimit}
              onChange={(e) => setDailyLimit(Number(e.target.value))}
              className="w-full h-2 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-[#59595A] text-xs mt-2">
              <span>$0</span>
              <span>$10,000</span>
            </div>
          </div>

          {/* ATM Spending */}
          <div>
            <div className="flex justify-between text-white mb-4">
              <span className="font-medium">ATM Withdrawals</span>
              <span className="font-bold">${atmLimit.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={atmLimit}
              onChange={(e) => setAtmLimit(Number(e.target.value))}
              className="w-full h-2 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-[#59595A] text-xs mt-2">
              <span>$0</span>
              <span>$2,000</span>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-[#141414] rounded-xl border border-[#333] flex items-center gap-3">
          <Shield className="text-green-500" size={20} />
          <p className="text-[#B3B3B3] text-sm">
            Changes to limits generally take effect immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
