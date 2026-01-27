"use client";

import { Shield, ShieldAlert, Heart, Car, Home } from "lucide-react";

export default function InsurancePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-white mb-2">
          Insurance Protection
        </h1>
        <p className="text-[#B3B3B3]">
          Safeguard what matters most with comprehensive coverage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 hover:border-primary transition-colors cursor-pointer">
          <Heart className="text-red-500 mb-4" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Life Insurance</h3>
          <p className="text-[#B3B3B3] text-sm">
            Protect your family's financial future.
          </p>
        </div>
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 hover:border-blue-500 transition-colors cursor-pointer">
          <Home className="text-blue-500 mb-4" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Home Insurance</h3>
          <p className="text-[#B3B3B3] text-sm">
            Coverage for your property and belongings.
          </p>
        </div>
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 hover:border-yellow-500 transition-colors cursor-pointer">
          <Car className="text-yellow-500 mb-4" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Auto Insurance</h3>
          <p className="text-[#B3B3B3] text-sm">
            On-road protection for your vehicle.
          </p>
        </div>
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 hover:border-green-500 transition-colors cursor-pointer">
          <ShieldAlert className="text-green-500 mb-4" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Cyber Insurance</h3>
          <p className="text-[#B3B3B3] text-sm">
            Identity theft and digital asset protection.
          </p>
        </div>
      </div>

      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            Already have policy?
          </h2>
          <p className="text-[#B3B3B3]">
            Link your existing external policies to view them in your dashboard.
          </p>
        </div>
        <button className="bg-[#141414] border border-[#333] text-white px-6 py-3 rounded-full hover:bg-[#222] transition-colors font-medium">
          Link Policy
        </button>
      </div>
    </div>
  );
}
