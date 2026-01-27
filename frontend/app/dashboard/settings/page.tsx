"use client";

import { User, Lock, Bell, Shield, Smartphone } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>

      <div className="grid gap-6">
        {/* Section 1: Profile */}
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <User className="text-primary" /> Profile Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs text-[#B3B3B3] mb-1">
                Full Name
              </label>
              <input
                type="text"
                value="Sultan Abaniks"
                className="w-full bg-[#141414] border border-[#333] rounded-xl px-4 py-3 text-white"
                readOnly
              />
            </div>
            <div>
              <label className="block text-xs text-[#B3B3B3] mb-1">Email</label>
              <input
                type="email"
                value="sultan@example.com"
                className="w-full bg-[#141414] border border-[#333] rounded-xl px-4 py-3 text-white"
                readOnly
              />
            </div>
            <div>
              <label className="block text-xs text-[#B3B3B3] mb-1">Phone</label>
              <input
                type="text"
                value="+1 (555) 000-0000"
                className="w-full bg-[#141414] border border-[#333] rounded-xl px-4 py-3 text-white"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Section 2: Security */}
        <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Shield className="text-primary" /> Security
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-[#141414] rounded-xl border border-[#333]">
              <div className="flex items-center gap-4">
                <Lock className="text-[#B3B3B3]" />
                <div>
                  <p className="text-white font-medium">Change Password</p>
                  <p className="text-xs text-[#59595A]">
                    Last changed 3 months ago
                  </p>
                </div>
              </div>
              <button className="text-primary text-sm font-bold">Update</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#141414] rounded-xl border border-[#333]">
              <div className="flex items-center gap-4">
                <Smartphone className="text-[#B3B3B3]" />
                <div>
                  <p className="text-white font-medium">
                    Two-Factor Authentication
                  </p>
                  <p className="text-xs text-[#59595A]">Enabled via SMS</p>
                </div>
              </div>
              <button className="text-primary text-sm font-bold">
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
