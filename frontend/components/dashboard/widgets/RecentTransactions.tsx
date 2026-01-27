"use client";

import {
  ShoppingBag,
  Plane,
  TabletSmartphone,
  Coffee,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";

const TRANSACTIONS = [
  {
    id: 1,
    name: "Apple Store",
    category: "Tech",
    date: "Today, 10:42 AM",
    amount: -1299.0,
    icon: TabletSmartphone,
    color: "bg-gray-800",
  },
  {
    id: 2,
    name: "Uber Trip",
    category: "Travel",
    date: "Yesterday, 8:20 PM",
    amount: -24.5,
    icon: Plane,
    color: "bg-blue-900",
  },
  {
    id: 3,
    name: "Starbucks",
    category: "Food",
    date: "Yesterday, 9:15 AM",
    amount: -5.4,
    icon: Coffee,
    color: "bg-orange-900",
  },
  {
    id: 4,
    name: "Freelance",
    category: "Income",
    date: "Jan 24, 2026",
    amount: 2450.0,
    icon: ArrowDownLeft,
    color: "bg-green-900",
  },
  {
    id: 5,
    name: "Whole Foods",
    category: "Groceries",
    date: "Jan 23, 2026",
    amount: -142.8,
    icon: ShoppingBag,
    color: "bg-yellow-900",
  },
];

export default function RecentTransactions() {
  return (
    <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-semibold">Recent Transactions</h3>
        <button className="text-xs text-[#B3B3B3] hover:text-primary transition-colors">
          View All
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
        {TRANSACTIONS.map((tx) => {
          const Icon = tx.icon;
          return (
            <div
              key={tx.id}
              className="flex items-center justify-between group cursor-pointer p-2 rounded-xl hover:bg-[#262626] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${tx.color} bg-opacity-30 border border-white/5 flex items-center justify-center text-white group-hover:scale-105 transition-transform`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{tx.name}</p>
                  <p className="text-[#59595A] text-xs">
                    {tx.category} • {tx.date}
                  </p>
                </div>
              </div>
              <div
                className={`font-semibold text-sm ${tx.amount > 0 ? "text-primary" : "text-white"}`}
              >
                {tx.amount > 0 ? "+" : ""}
                {tx.amount.toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
