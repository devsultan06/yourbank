"use client";

import ATMLocator from "@/components/dashboard/widgets/ATMLocator";

export default function MapPage() {
  return (
    <div className="h-[calc(100vh-140px)] flex flex-col space-y-4">
      <h1 className="text-3xl font-bold text-white">ATM Locator</h1>
      <div className="flex-1 min-h-0">
        <ATMLocator />
      </div>
    </div>
  );
}
