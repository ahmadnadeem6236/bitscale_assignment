"use client";

import { useState } from "react";

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <div>
      {/* Pricing toggle */}
      <div className="relative flex w-full bg-[#E1EFFE] rounded-lg">
        <span
          className="absolute inset-0 m-1 pointer-events-none"
          aria-hidden="true"
        >
          <span
            className={`absolute inset-0 w-1/2 bg-[#FFFFFF] rounded-lg shadow-sm  transform transition-transform duration-150 ease-in-out ${
              isAnnual ? "translate-x-0" : "translate-x-full"
            }`}
          ></span>
        </span>
        <button
          className={`relative flex-1 text-[17.09px] font-medium h-[59.64px] rounded-full  transition-colors duration-150 ease-in-out ${
            isAnnual && "text-[#1F2A37]"
          }`}
          onClick={() => setIsAnnual(true)}
          aria-pressed={isAnnual}
        >
          Monthly{" "}
        </button>
        <button
          className={`relative flex-1 text-[17.09px] font-medium h-[59.64px] rounded-full transition-colors duration-150 ease-in-out ${
            isAnnual && "text-[#1F2A37]"
          }`}
          onClick={() => setIsAnnual(false)}
          aria-pressed={isAnnual}
        >
          Annaul
        </button>
      </div>

      {/* Price Table */}
    </div>
  );
}
