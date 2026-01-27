"use client";

import { useState } from "react";
import {
  CreditCard,
  Snowflake,
  Wifi,
  Globe,
  ShieldAlert,
  Copy,
  Eye,
  EyeOff,
} from "lucide-react";

export default function WalletPage() {
  const [frozen, setFrozen] = useState(false);
  const [online, setOnline] = useState(true);
  const [atm, setAtm] = useState(true);
  const [showNumbers, setShowNumbers] = useState(false);

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">My Wallet</h1>
        <p className="text-[#B3B3B3]">
          Manage your physical and virtual cards, limits, and security.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column: Card Visual & Quick Actions */}
        <div className="xl:col-span-1 space-y-6">
          {/* The Card */}
          <div
            className={`
                relative h-[240px] rounded-[30px] p-8 flex flex-col justify-between overflow-hidden transition-all duration-500
                ${frozen ? "grayscale opacity-80" : "bg-gradient-to-br from-[#1C1C1C] to-black border border-white/10"}
            `}
          >
            {frozen && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="flex flex-col items-center text-white">
                  <Snowflake size={48} />
                  <span className="font-bold text-xl mt-2">FROZEN</span>
                </div>
              </div>
            )}

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10 flex justify-between items-start">
              <span className="font-bold text-white italic text-2xl">VISA</span>
              <Wifi size={24} className="text-white/50 rotate-90" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-2xl font-mono text-white tracking-widest">
                  {showNumbers ? "4920 1234 5678 8842" : "4920 **** **** 8842"}
                </span>
                <button
                  onClick={() => setShowNumbers(!showNumbers)}
                  className="text-[#59595A] hover:text-white"
                >
                  {showNumbers ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[#59595A] text-xs uppercase mb-1">
                    Card Holder
                  </p>
                  <p className="text-white font-medium">SULTAN ABANIKS</p>
                </div>
                <div>
                  <p className="text-[#59595A] text-xs uppercase mb-1">
                    Expires
                  </p>
                  <p className="text-white font-medium">12/28</p>
                </div>
                <div>
                  <p className="text-[#59595A] text-xs uppercase mb-1">CVV</p>
                  <p className="text-white font-medium">•••</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1C1C1C] border border-[#262626] rounded-2xl p-4">
              <p className="text-[#B3B3B3] text-xs mb-1">Monthly Limit</p>
              <p className="text-white font-bold text-lg">$20,000</p>
              <div className="w-full h-1 bg-[#333] rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-primary w-[45%]"></div>
              </div>
              <p className="text-[#59595A] text-[10px] mt-1">45% Used</p>
            </div>
            <div className="bg-[#1C1C1C] border border-[#262626] rounded-2xl p-4">
              <p className="text-[#B3B3B3] text-xs mb-1">Cashback Earned</p>
              <p className="text-primary font-bold text-lg">+$124.50</p>
              <p className="text-[#59595A] text-[10px] mt-3">
                2% on all purchases
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Settings & Controls */}
        <div className="xl:col-span-2 space-y-6">
          {/* Control Panel */}
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 lg:p-8">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <ShieldAlert size={20} className="text-primary" />
              Security & Controls
            </h3>

            <div className="space-y-6">
              {/* Freeze Line */}
              <div className="flex items-center justify-between py-4 border-b border-[#262626]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Snowflake size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Freeze Card</p>
                    <p className="text-[#59595A] text-sm">
                      Temporarily disable all transactions
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setFrozen(!frozen)}
                  className={`w-14 h-8 rounded-full transition-colors relative ${frozen ? "bg-blue-500" : "bg-[#333]"}`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${frozen ? "left-7" : "left-1"}`}
                  ></div>
                </button>
              </div>

              {/* Online Payments */}
              <div className="flex items-center justify-between py-4 border-b border-[#262626]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Online Payments</p>
                    <p className="text-[#59595A] text-sm">
                      Allow transactions on internet
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOnline(!online)}
                  className={`w-14 h-8 rounded-full transition-colors relative ${online ? "bg-primary" : "bg-[#333]"}`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${online ? "left-7" : "left-1"}`}
                  ></div>
                </button>
              </div>

              {/* ATM */}
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium">ATM Withdrawals</p>
                    <p className="text-[#59595A] text-sm">
                      Allow cash withdrawals
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setAtm(!atm)}
                  className={`w-14 h-8 rounded-full transition-colors relative ${atm ? "bg-primary" : "bg-[#333]"}`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${atm ? "left-7" : "left-1"}`}
                  ></div>
                </button>
              </div>
            </div>
          </div>

          {/* Spending Limits Slider */}
          <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 lg:p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-bold">Spending Limits</h3>
              <span className="text-primary font-bold text-lg">
                $5,000{" "}
                <span className="text-[#59595A] text-sm font-normal">
                  / day
                </span>
              </span>
            </div>

            <input
              type="range"
              min="100"
              max="10000"
              defaultValue="5000"
              className="w-full h-2 bg-[#333] rounded-lg appearance-none cursor-pointer accent-primary"
            />

            <div className="flex justify-between text-[#59595A] text-xs mt-2">
              <span>$100</span>
              <span>$10,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
