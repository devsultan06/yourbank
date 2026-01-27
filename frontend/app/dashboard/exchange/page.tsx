"use client";

import CurrencyExchangeWidget from "@/components/dashboard/widgets/CurrencyExchangeWidget";

export default function ExchangePage() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Currency Exchange
        </h1>
        <div className="h-[500px]">
          <CurrencyExchangeWidget />
        </div>
      </div>
    </div>
  );
}
