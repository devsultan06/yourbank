"use client";

import { Send, Plus } from "lucide-react";

const RECENT_CONTACTS = [
  { name: "Alex M.", initials: "AM", color: "bg-blue-500" },
  { name: "Sarah J.", initials: "SJ", color: "bg-purple-500" },
  { name: "Mike R.", initials: "MR", color: "bg-orange-500" },
  { name: "Lisa K.", initials: "LK", color: "bg-pink-500" },
];

export default function QuickTransfer() {
  return (
    <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 h-full flex flex-col">
      <h3 className="text-white font-semibold mb-6">Quick Transfer</h3>

      {/* Contacts Carousel */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <button className="flex flex-col items-center gap-2 min-w-[60px]">
          <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#333] flex items-center justify-center text-[#59595A] hover:text-white hover:border-primary transition-colors">
            <Plus size={24} />
          </div>
          <span className="text-xs text-[#59595A]">Add New</span>
        </button>

        {RECENT_CONTACTS.map((contact, i) => (
          <button
            key={i}
            className="flex flex-col items-center gap-2 min-w-[60px] group"
          >
            <div
              className={`w-14 h-14 rounded-full ${contact.color} flex items-center justify-center text-white font-bold border-2 border-[#1C1C1C] ring-2 ring-transparent group-hover:ring-primary transition-all`}
            >
              {contact.initials}
            </div>
            <span className="text-xs text-[#B3B3B3] group-hover:text-white transition-colors">
              {contact.name}
            </span>
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="mt-auto">
        <div className="relative">
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-primary">
            $
          </span>
          <input
            type="number"
            placeholder="0.00"
            className="w-full bg-[#141414] border border-[#262626] rounded-2xl py-4 pl-12 pr-4 text-white text-xl font-bold placeholder:text-[#333] focus:outline-none focus:border-primary/50 transition-colors"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-black p-2.5 rounded-xl hover:bg-opacity-90 transition-colors">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
