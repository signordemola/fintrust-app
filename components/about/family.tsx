import Link from "next/link";
import React from "react";

const JoinFinancialFamilySection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-white mb-6 font-serif">
            Join Our Financial Family
          </h2>
          <p className="text-lg text-text-white/90 mb-8">
            Experience the difference of member-focused banking. Join Fintrust
            Credit Union today and become part of a community dedicated to your
            financial success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/register"
              className="px-6 py-3 bg-text-white text-primary-600 font-medium rounded-xl hover:bg-text-white/90 transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center group shadow-soft"
            >
              Become a Member
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                ></path>
              </svg>
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-text-white text-text-white font-medium rounded-xl hover:bg-text-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinFinancialFamilySection;
