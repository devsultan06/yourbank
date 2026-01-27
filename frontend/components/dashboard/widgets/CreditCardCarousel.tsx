"use client";

const CARDS = [
  {
    id: 1,
    type: "visa",
    number: "4920 **** **** 8842",
    expiry: "12/28",
    balance: "$8,450.00",
    // Premium Glass Black
    bg: "bg-white/5 backdrop-blur-2xl border-white/10 relative",
  },
  {
    id: 2,
    type: "mastercard",
    number: "5500 **** **** 1029",
    expiry: "09/27",
    balance: "$2,100.00",
    // Frosted Glass Purple
    bg: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border-white/10",
  },
];

export default function CreditCardCarousel() {
  return (
    <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-semibold">My Cards</h3>
        <button className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
          +
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {CARDS.map((card) => (
          <div
            key={card.id}
            className={`
                  min-w-[280px] h-[170px] rounded-3xl p-6 relative overflow-hidden snap-center flex flex-col justify-between border
                  ${card.bg} shadow-lg
               `}
          >
            {/* Gloss effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex justify-between items-start relative z-10">
              {card.type === "visa" ? (
                <span className="font-bold text-white italic text-lg">
                  VISA
                </span>
              ) : (
                <div className="flex">
                  <div className="w-6 h-6 rounded-full bg-red-500/80"></div>
                  <div className="w-6 h-6 rounded-full bg-yellow-500/80 -ml-3"></div>
                </div>
              )}
              <span className="text-white/60 text-xs">Debit</span>
            </div>

            <div className="relative z-10">
              <p className="text-white font-medium text-lg tracking-widest mb-1">
                {card.number}
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-white/40 text-[10px] block uppercase">
                    Expires
                  </span>
                  <span className="text-white text-xs">{card.expiry}</span>
                </div>
                <span className="text-white font-bold">{card.balance}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
