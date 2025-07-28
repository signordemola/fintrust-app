import Link from "next/link";
import React from "react";

const PersonalBankingContent = () => {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
            Personal Banking Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover financial solutions designed to help you thrive at every
            stage of life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Premier Checking */}
          <div className="relative group">
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-text-white px-6 py-2 rounded-full text-sm font-medium z-10 shadow-lg">
              Most Popular
            </div>
            <div className="h-full bg-text-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 overflow-hidden border border-border-color">
              <div className="p-8 bg-gradient-to-br from-primary-50 to-text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-12 w-12 text-primary-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  ></path>
                </svg>
                <h3 className="text-2xl font-bold mt-6 text-foreground">
                  Premier Checking
                </h3>
                <p className="mt-3 text-muted-foreground">
                  A premium checking experience with exclusive benefits
                </p>
                <div className="mt-6 inline-block bg-primary-50 rounded-full px-4 py-1 text-sm font-medium text-primary-600">
                  No minimum balance
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>No monthly maintenance fees</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Free ATM access nationwide</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Early direct deposit access</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Mobile check deposit</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-text-white hover:bg-primary-700 transition-all duration-300 group"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: High-Yield Savings */}
          <div className="relative group">
            <div className="h-full bg-text-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 overflow-hidden border border-border-color">
              <div className="p-8 bg-gradient-to-br from-primary-50 to-text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-12 w-12 text-primary-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                  ></path>
                </svg>
                <h3 className="text-2xl font-bold mt-6 text-foreground">
                  High-Yield Savings
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Make your money work harder with competitive rates
                </p>
                <div className="mt-6 inline-block bg-primary-50 rounded-full px-4 py-1 text-sm font-medium text-primary-600">
                  3.50% APY
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>3.50% APY* on all balances</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>No monthly fees</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Automatic savings tools</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Goal-based savings</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-text-white hover:bg-primary-700 transition-all duration-300 group"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Rewards Credit Card */}
          <div className="relative group">
            <div className="h-full bg-text-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 overflow-hidden border border-border-color">
              <div className="p-8 bg-gradient-to-br from-primary-50 to-text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-12 w-12 text-primary-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  ></path>
                </svg>
                <h3 className="text-2xl font-bold mt-6 text-foreground">
                  Rewards Credit Card
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Earn rewards on every purchase, every day
                </p>
                <div className="mt-6 inline-block bg-primary-50 rounded-full px-4 py-1 text-sm font-medium text-primary-600">
                  0% APR for 15 months
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>2% unlimited cash back</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>No annual fee</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Travel insurance included</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Mobile wallet compatible</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-text-white hover:bg-primary-700 transition-all duration-300 group"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4: Home Mortgages */}
          <div className="relative group">
            <div className="h-full bg-text-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 overflow-hidden border border-border-color">
              <div className="p-8 bg-gradient-to-br from-primary-50 to-text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-12 w-12 text-primary-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  ></path>
                </svg>
                <h3 className="text-2xl font-bold mt-6 text-foreground">
                  Home Mortgages
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Your dream home awaits with competitive rates
                </p>
                <div className="mt-6 inline-block bg-primary-50 rounded-full px-4 py-1 text-sm font-medium text-primary-600">
                  From 3.99% APR
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Low down payment options</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Fixed &amp; adjustable rates</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>First-time buyer programs</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Digital application</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-text-white hover:bg-primary-700 transition-all duration-300 group"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5: Investment Solutions */}
          <div className="relative group">
            <div className="h-full bg-text-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 overflow-hidden border border-border-color">
              <div className="p-8 bg-gradient-to-br from-primary-50 to-text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-12 w-12 text-primary-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                  ></path>
                </svg>
                <h3 className="text-2xl font-bold mt-6 text-foreground">
                  Investment Solutions
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Build your wealth with expert guidance
                </p>
                <div className="mt-6 inline-block bg-primary-50 rounded-full px-4 py-1 text-sm font-medium text-primary-600">
                  Custom solutions
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Retirement planning</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Managed portfolios</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Tax-advantaged accounts</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Professional advice</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-text-white hover:bg-primary-700 transition-all duration-300 group"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6: Personal Loans */}
          <div className="relative group">
            <div className="h-full bg-text-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 overflow-hidden border border-border-color">
              <div className="p-8 bg-gradient-to-br from-primary-50 to-text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-12 w-12 text-primary-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  ></path>
                </svg>
                <h3 className="text-2xl font-bold mt-6 text-foreground">
                  Personal Loans
                </h3>
                <p className="mt-3 text-muted-foreground">
                 {" Flexible financing for life's moments"}
                </p>
                <div className="mt-6 inline-block bg-primary-50 rounded-full px-4 py-1 text-sm font-medium text-primary-600">
                  From 5.99% APR
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Quick approval process</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Competitive rates</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>No prepayment penalties</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      ></path>
                    </svg>
                    <span>Fixed monthly payments</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-text-white hover:bg-primary-700 transition-all duration-300 group"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalBankingContent
