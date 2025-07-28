"use client";

import { useState } from "react";
import BusinessBankingContent from "./business-banking";
import PersonalBankingContent from "./personal-banking";

const ServicesHeroSection = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <>
      <div className="relative pt-24 overflow-hidden bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary-400/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl"></div>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-white mb-6 relative z-10 font-serif">
              Financial Solutions for
              <span className="block mt-2 text-accent-300">
                Every Stage of Life
              </span>
            </h1>
            <p className="text-xl text-text-white/90 leading-relaxed max-w-2xl mx-auto mb-12">
              Discover tailored financial products designed to help you achieve
              your goals, whether personal or business.
            </p>
            <div className="inline-flex p-1.5 bg-text-white/10 backdrop-blur-sm rounded-full shadow-xl border border-text-white/20">
              <button
                onClick={() => setActiveTab("personal")}
                className={`px-8 py-3 cursor-pointer rounded-full transition-all duration-300 text-base font-medium
                  ${
                    activeTab === "personal"
                      ? "bg-text-white text-primary-600 shadow-sm"
                      : "text-text-white hover:bg-text-white/10"
                  }`}
              >
                Personal Banking
              </button>
              <button
                onClick={() => setActiveTab("business")}
                className={`px-8 py-3 cursor-pointer rounded-full transition-all duration-300 text-base font-medium
                  ${
                    activeTab === "business"
                      ? "bg-text-white text-primary-600 shadow-sm"
                      : "text-text-white hover:bg-text-white/10"
                  }`}
              >
                Business Banking
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeTab === "personal" ? (
        <PersonalBankingContent />
      ) : (
        <BusinessBankingContent />
      )}
    </>
  );
};

export default ServicesHeroSection;
