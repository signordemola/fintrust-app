import VerifyPasskeyForm from "@/components/forms/auth/verify-passkey-form";
import React, { Suspense } from "react";

const VerifyPasskeyPage = () => {
  const year = new Date().getFullYear();
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-primary-500 to-accent-600 relative overflow-hidden">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-3/4 h-auto text-white opacity-90"
              viewBox="0 0 1119 699"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M292.5 213C292.5 227.5 264 236.5 230 236.5C196 236.5 168 227.5 168 213C168 198.5 196 189.5 230 189.5C264 189.5 292.5 198.5 292.5 213Z"
                fill="currentColor"
              ></path>
              <path
                d="M292.5 213C292.5 227.5 264 236.5 230 236.5C196 236.5 168 227.5 168 213M292.5 213C292.5 198.5 264 189.5 230 189.5C196 189.5 168 198.5 168 213M292.5 213V282M168 213V282M292.5 282C292.5 296.5 264 305.5 230 305.5C196 305.5 168 296.5 168 282M292.5 282C292.5 267.5 264 258.5 230 258.5C196 258.5 168 267.5 168 282"
                stroke="currentColor"
                strokeWidth="3"
              ></path>
              <path
                d="M821.5 520C821.5 534.5 793 543.5 759 543.5C725 543.5 697 534.5 697 520C697 505.5 725 496.5 759 496.5C793 496.5 821.5 505.5 821.5 520Z"
                fill="currentColor"
              ></path>
              <path
                d="M821.5 520C821.5 534.5 793 543.5 759 543.5C725 543.5 697 534.5 697 520M821.5 520C821.5 505.5 793 496.5 759 496.5C725 496.5 697 505.5 697 520M821.5 520V589M697 520V589M821.5 589C821.5 603.5 793 612.5 759 612.5C725 612.5 697 603.5 697 589M821.5 589C821.5 574.5 793 565.5 759 565.5C725 565.5 697 574.5 697 589"
                stroke="currentColor"
                strokeWidth="3"
              ></path>
              <rect
                x="416.5"
                y="249.5"
                width="281"
                height="200"
                rx="3.5"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="5"
              ></rect>
              <rect
                x="266"
                y="23"
                width="602"
                height="653"
                rx="20"
                stroke="currentColor"
                strokeWidth="6"
              ></rect>
              <path
                d="M309 385L382 308L433.5 385H309Z"
                fill="currentColor"
              ></path>
              <path
                d="M496 385L512 361L529 385H496Z"
                fill="currentColor"
              ></path>
              <path
                d="M562 385L617.5 308L673 385H562Z"
                fill="currentColor"
              ></path>
              <path
                d="M309 141L372.5 72L436 141H309Z"
                fill="currentColor"
              ></path>
              <path d="M496 141L552 72L608 141H496Z" fill="currentColor"></path>
              <path
                d="M682 141L710 110L738 141H682Z"
                fill="currentColor"
              ></path>
              <path
                d="M309 249.5H697"
                stroke="currentColor"
                strokeWidth="5"
              ></path>
              <path
                d="M309 449.5H697"
                stroke="currentColor"
                strokeWidth="5"
              ></path>
              <path
                d="M416.5 142V449"
                stroke="currentColor"
                strokeWidth="5"
              ></path>
              <path
                d="M592.5 142V249"
                stroke="currentColor"
                strokeWidth="5"
              ></path>
              <path
                d="M592.5 449V556"
                stroke="currentColor"
                strokeWidth="5"
              ></path>
              <path
                d="M309 556.5H697"
                stroke="currentColor"
                strokeWidth="5"
              ></path>
              <circle cx="138" cy="563" r="30" fill="currentColor"></circle>
              <circle cx="968" cy="139" r="30" fill="currentColor"></circle>
              <path
                d="M64 343L137 270L210 343L137 416L64 343Z"
                stroke="currentColor"
                strokeWidth="3"
              ></path>
              <path
                d="M908 412L981 339L1054 412L981 485L908 412Z"
                stroke="currentColor"
                strokeWidth="3"
              ></path>
            </svg>
            <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-accent-500 rounded-lg opacity-70 animate-float"></div>
            <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-orange-500 rounded-full opacity-70 animate-float animation-delay-1000"></div>
            <div className="absolute top-2/3 left-1/3 w-10 h-10 bg-yellow-400 rounded-lg opacity-70 animate-float animation-delay-2000"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h2 className="text-3xl font-serif font-bold">
            FinTrust Secure Portal
          </h2>
          <p className="mt-2 text-primary-100">
            Connecting you to what matters most.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col">
        <Suspense fallback={<div>Loading form...</div>}>
          <VerifyPasskeyForm />
        </Suspense>
        <footer className="py-4 text-center">
          <p className="text-xs text-gray-600">
            © {year} FinTrust. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default VerifyPasskeyPage;
