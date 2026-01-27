"use client";

import { Calendar, RefreshCw, Trash2 } from "lucide-react";

export default function ScheduledTransactionsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-white mb-2">Scheduled Payments</h1>

      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] overflow-hidden">
        <div className="p-6 border-b border-[#262626] flex justify-between items-center bg-[#141414]">
          <h2 className="text-white font-bold">Recurring</h2>
          <button className="text-primary text-sm font-bold">
            + Schedule New
          </button>
        </div>

        <div className="divide-y divide-[#262626]">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="p-6 flex items-center justify-between hover:bg-[#222] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#262626] rounded-xl flex items-center justify-center text-white">
                  <RefreshCw size={20} />
                </div>
                <div>
                  <p className="text-white font-bold">
                    {i === 1 ? "Netflix Subscription" : "Rent Payment"}
                  </p>
                  <p className="text-[#59595A] text-sm flex items-center gap-1">
                    <Calendar size={12} /> Next:{" "}
                    {i === 1 ? "Feb 14, 2026" : "Mar 01, 2026"}
                  </p>
                </div>
              </div>
              <div className="text-right flex items-center gap-6">
                <div>
                  <p className="text-white font-bold">
                    {i === 1 ? "$15.99" : "$1,200.00"}
                  </p>
                  <p className="text-[#59595A] text-xs">Monthly</p>
                </div>
                <button className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
