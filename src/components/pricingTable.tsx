"use client";

import { useState } from "react";
import PricingLayout from "./pricingLayout";

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <div className="mt-10 ">
      {/* Pricing toggle */}
      <div className="w-full flex justify-center">
        <div className="relative flex  w-[196.34px] mb-10 bg-[#E1EFFE] rounded-lg">
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
      </div>
      {/* Price Table */}
      <div className="relative flex gap-[20px] justify-center">
        <PricingLayout
          planName="Trial"
          planTitle="Try Now"
          planDescription="Get personalised template"
          features={[
            "25+ data sources",
            "GPT4, LinkedIn and others",
            "Access to slack community",
            "10+ templates to scale your outbound",
          ]}
          planUse={["Explore product capabilities"]}
          btnText="Try Now"
        />
        <PricingLayout
          planName="Growth"
          price={229}
          discount={459}
          features={[
            "8,000 credits",
            "Webhook, HTTP API",
            "Credit rollover (upto 2x plan credits",
            "Outbound email integrations like Instantly, Smartlead.",
            "Dedicated 3 hours from Bitscale expert",
          ]}
          planUse={[
            "Unlimited leads search",
            "Fully enriched 5000 leads",
            "Personalized outreach at scale",
          ]}
          btnText="Continue with Growth"
        />
        <PricingLayout
          planName="Booster"
          price={499}
          tag="Popular"
          discount={999}
          features={[
            "25,000 credits",
            "Webhook, HTTP API",
            "Credit rollover (upto 2x plan credits",
            "Outbound email integrations like Instantly, Smartlead.",
            "Dedicated 3 hours from Bitscale expert",
            "Advanced models like Claude Sonnet",
            "Dedicated 8 hours from Bitscale experts",
            "2 way Hubspot integration",
          ]}
          planUse={[
            "Unlimited leads search",
            "Fully enriched 5000 leads",
            "Personalized outreach at scale",
          ]}
          btnText="Continue with Booster"
        />
        <PricingLayout
          planName="Enterprise"
          planTitle="Contact Us"
          planDescription="For individual pricing"
          features={[
            "Data privacy certification",
            "Priority Support",
            "Dedicated Bitscale expert",
            "Private Slack Channel",
            "Collaborative workspacee and templates",
          ]}
          planUse={[
            "Perfect for High-Volume End-to-End CRM Data Enrichment",
            "Unlimited list of leads with unlimited data points",
          ]}
          btnText="Try Now"
        />
      </div>
    </div>
  );
}
