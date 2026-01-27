"use client";

import { Shield, Key, Smartphone, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SecurityPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-white mb-2">Security Settings</h1>

      {/* Password Change */}
      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
            <Key size={20} />
          </div>
          <h2 className="text-xl font-bold text-white">Password</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-[#B3B3B3] text-sm mb-2">
              Current Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#141414] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-[#B3B3B3] text-sm mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full bg-[#141414] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#59595A] hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="bg-primary text-black font-bold px-6 py-2 rounded-lg hover:opacity-90">
            Update Password
          </button>
        </div>
      </div>

      {/* 2FA */}
      <div className="bg-[#1C1C1C] border border-[#262626] rounded-[24px] p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500">
            <Smartphone size={20} />
          </div>
          <h2 className="text-xl font-bold text-white">
            Two-Factor Authentication
          </h2>
        </div>

        <div className="flex justify-between items-center bg-[#141414] border border-[#333] rounded-xl p-4">
          <div>
            <p className="text-white font-bold">Authenticator App</p>
            <p className="text-[#59595A] text-sm">
              Recommended for highest security.
            </p>
          </div>
          <button className="text-primary font-bold text-sm hover:underline">
            Enable
          </button>
        </div>
      </div>
    </div>
  );
}
