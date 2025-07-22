"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import BetweenAccountsForm from "./forms/transaction-form/between-accounts";
import FinTrustUserForm from "./forms/transaction-form/fintrust-user";
import USBankForm from "./forms/transaction-form/usbank-form";
import InternationalForm from "./forms/transaction-form/international-form";

interface TransferSectionProps {
  allAccounts: {
    id: string;
    balance: number;
    accountNumber: string;
    holder: string;
    type: string;
    status: string;
  }[];
}

const TransferSection = ({ allAccounts }: TransferSectionProps) => {
  return (
    <div id="transfer-section" className="mb-8 scroll-smooth scroll-mt-30">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Transfer Money
            </h2>
            <p className="text-sm text-gray-500">
              Send money securely to accounts and other users
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          <div className="text-center mt-6">
            <h2 className="text-2xl font-playfair font-bold text-gray-900">
              Transfer Money
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Choose a transfer type to get started
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl mb-12 overflow-hidden">
            <Tabs
              defaultValue="between-accounts"
              className="w-full rounded-md shadow-card"
            >
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-16 w-full">
                <TabsTrigger
                  value="between-accounts"
                  className="relative flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-200 bg-white hover:cursor-pointer hover:bg-primary-50 data-[state=active]:bg-primary-50 data-[state=active]:text-primary-900 data-[state=active]:border-b-primary-900"
                >
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent data-[state=active]:border-b data-[state=active]:border-b-primary-600"></div>
                  <div className="p-3 rounded-xl mb-2 text-primary-600 bg-primary-0 transition-colors duration-200 data-[state=active]:bg-primary-100 data-[state=active]:border-b-primary-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l-4"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-primary-900 data-[state=active]:text-primary-900">
                    Between Accounts
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="northstone-user"
                  className="relative flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-200 bg-white hover:cursor-pointer hover:bg-primary-50 data-[state=active]:bg-primary-50 data-[state=active]:text-primary-900 data-[state=active]:border-b-primary-900"
                >
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent data-[state=active]:bg-primary-600"></div>
                  <div className="p-3 rounded-xl mb-2 text-primary-600 bg-gray-50 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-primary-600 hover:text-primary-900 data-[state=active]:text-primary-900">
                    To FinTrust User
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="us-bank"
                  className="relative flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-200 bg-white hover:cursor-pointer hover:bg-primary-50 data-[state=active]:bg-primary-50 data-[state=active]:text-primary-900 data-[state=active]:border-b-primary-900"
                >
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent data-[state=active]:bg-primary-600"></div>
                  <div className="p-3 rounded-xl mb-2 text-primary-600 bg-gray-50 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-primary-600 hover:text-primary-900 data-[state=active]:text-primary-900">
                    To US Bank
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="international"
                  className="relative flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-200 bg-white hover:cursor-pointer hover:bg-primary-50 data-[state=active]:bg-primary-50 data-[state=active]:text-primary-900 data-[state=active]:border-b-primary-900"
                >
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent data-[state=active]:bg-primary-600"></div>
                  <div className="p-3 rounded-xl mb-2 text-primary-600 bg-gray-50 transition-colors duration-200 hover:bg-primary-100 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-primary-600 hover:text-primary-900 data-[state=active]:text-primary-900">
                    International
                  </span>
                </TabsTrigger>
              </TabsList>
              <div className="mt-6">
                <TabsContent
                  value="between-accounts"
                  className="max-w-4xl mx-auto"
                >
                  <BetweenAccountsForm allAccounts={allAccounts} />
                </TabsContent>
                <TabsContent
                  value="northstone-user"
                  className="max-w-4xl mx-auto"
                >
                  <FinTrustUserForm allAccounts={allAccounts} />
                </TabsContent>
                <TabsContent value="us-bank" className="max-w-4xl mx-auto">
                  <USBankForm allAccounts={allAccounts} />
                </TabsContent>
                <TabsContent
                  value="international"
                  className="max-w-4xl mx-auto"
                >
                  <InternationalForm allAccounts={allAccounts} />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferSection;
