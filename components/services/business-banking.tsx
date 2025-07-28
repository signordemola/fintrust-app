import Link from "next/link";
import React from "react";

const BusinessBankingContent = () => {
  return (
    <div className="py-16 bg-background">
      {" "}
      {/* Adjusted padding and background for content area */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
            Business Banking Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Power your business growth with our comprehensive suite of financial
            services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Business Checking */}
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
                  Business Checking
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Powerful tools for your growing business
                </p>
                <div className="mt-6 inline-block bg-primary-50 rounded-full px-4 py-1 text-sm font-medium text-primary-600">
                  First year free
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
                    <span>500 free transactions</span>
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
                    <span>Online &amp; mobile banking</span>
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
                    <span>Business debit cards</span>
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
                    <span>Integrated payroll</span>
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

          {/* Card 2: Merchant Services */}
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
                  Merchant Services
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Accept payments anywhere, anytime
                </p>
                <div className="mt-6 inline-block bg-primary-50 rounded-full px-4 py-1 text-sm font-medium text-primary-600">
                  Custom pricing
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
                    <span>Competitive processing rates</span>
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
                    <span>Next-day deposits</span>
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
                    <span>Mobile payment solutions</span>
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
                    <span>Point-of-sale systems</span>
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

          {/* Card 3: Business Credit Card */}
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
                  Business Credit Card
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Streamline expenses and earn rewards
                </p>
                <div className="mt-6 inline-block bg-primary-50 rounded-full px-4 py-1 text-sm font-medium text-primary-600">
                  No annual fee
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
                    <span>2% cash back on purchases</span>
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
                    <span>Employee cards included</span>
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
                    <span>Expense management tools</span>
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
                    <span>Travel benefits</span>
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

          {/* Card 4: Business Loans */}
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
                  Business Loans
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Fuel your business growth
                </p>
                <div className="mt-6 inline-block bg-primary-50 rounded-full px-4 py-1 text-sm font-medium text-primary-600">
                  From 4.99% APR
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
                    <span>SBA loan options</span>
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
                    <span>Equipment financing</span>
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
                    <span>Line of credit</span>
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
                    <span>Commercial real estate</span>
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

          {/* Card 5: Treasury Management */}
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
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                  ></path>
                </svg>
                <h3 className="text-2xl font-bold mt-6 text-foreground">
                  Treasury Management
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Optimize your cash flow
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
                    <span>Cash flow forecasting</span>
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
                    <span>Fraud prevention</span>
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
                    <span>Payment automation</span>
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
                    <span>Reporting tools</span>
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

          {/* Card 6: Business Savings */}
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
                  Business Savings
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Make your excess cash work harder
                </p>
                <div className="mt-6 inline-block bg-primary-50 rounded-full px-4 py-1 text-sm font-medium text-primary-600">
                  Up to 2.50% APY
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
                    <span>High-yield business savings</span>
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
                    <span>Money market accounts</span>
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
                    <span>CD options</span>
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
                    <span>Sweep accounts</span>
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

export default BusinessBankingContent;
