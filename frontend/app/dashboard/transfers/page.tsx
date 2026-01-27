"use client";

import { useState } from "react";
import {
  ArrowRightLeft,
  CreditCard,
  User,
  Zap,
  Building2,
  Repeat,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function TransfersPage() {
  const [activeTab, setActiveTab] = useState("transfer");

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-white mb-2">
        Transfers & Payments
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6">
          <h3 className="text-white font-bold mb-6">
            What would you like to do?
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center p-4 bg-[#CAFF33] rounded-2xl gap-2 hover:opacity-90 transition-opacity">
              <ArrowRightLeft className="text-black" size={24} />
              <span className="text-black font-bold text-sm">Send Money</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-[#141414] border border-[#333] rounded-2xl gap-2 hover:bg-[#222] transition-colors">
              <CreditCard className="text-white" size={24} />
              <span className="text-white font-medium text-sm">Pay Bill</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-[#141414] border border-[#333] rounded-2xl gap-2 hover:bg-[#222] transition-colors">
              <Building2 className="text-white" size={24} />
              <span className="text-white font-medium text-sm">
                Wire Transfer
              </span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-[#141414] border border-[#333] rounded-2xl gap-2 hover:bg-[#222] transition-colors">
              <Repeat className="text-white" size={24} />
              <span className="text-white font-medium text-sm">Scheduled</span>
            </button>
          </div>
        </div>

        {/* Recent Payees */}
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6">
          <h3 className="text-white font-bold mb-6">Recent Payees</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between group cursor-pointer hover:bg-[#141414] p-2 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                    {i === 1
                      ? "Netflix"
                      : i === 2
                        ? "Alex"
                        : i === 3
                          ? "Mom"
                          : "Landlord"}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {i === 1
                        ? "Netflix Subscription"
                        : i === 2
                          ? "Alex Johnson"
                          : i === 3
                            ? "Mom"
                            : "Landlord"}
                    </p>
                    <p className="text-[#59595A] text-xs">
                      {i === 1 ? "Bill Pay" : "Transfer"}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[#59595A] group-hover:text-primary transition-colors"
                />
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-center text-primary text-sm font-bold py-2 hover:underline">
            View All Contacts
          </button>
        </div>
      </div>

      {/* Bill Pay Section (Mockup) */}
      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6">
        <h3 className="text-white font-bold mb-6 flex items-center gap-2">
          <Zap className="text-yellow-500" /> Upcoming Bills
        </h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 border-b border-[#262626]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 font-bold">
                N
              </div>
              <div>
                <p className="text-white font-bold">Netflix</p>
                <p className="text-red-400 text-xs">Due Tomorrow</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-bold">$15.99</p>
              <button className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-lg mt-1 transition-colors">
                Pay Now
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                E
              </div>
              <div>
                <p className="text-white font-bold">Electric Co.</p>
                <p className="text-[#59595A] text-xs">Due in 5 days</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-bold">$142.50</p>
              <button className="text-xs bg-[#141414] text-[#59595A] px-3 py-1 rounded-lg mt-1 border border-[#333]">
                Auto-Pay On
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
