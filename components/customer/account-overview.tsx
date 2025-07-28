"use client";

import { formatAccountNumber } from "@/lib/utils";
import { FC, useState } from "react";
import { toast } from "sonner";

interface Account {
  balance: number;
  accountNumber: string;
  routingNumber: string;
  holder: string;
  type: string;
  status: string;
}

interface AccountOverviewProps {
  allAccountDetails: Account[] | null;
}

const AccountOverview: FC<AccountOverviewProps> = ({ allAccountDetails }) => {
  const [selectedAccountIndex, setSelectedAccountIndex] = useState(() => {
    if (allAccountDetails && allAccountDetails.length > 0) {
      const checkingIndex = allAccountDetails.findIndex((account) =>
        account.type.includes("Checking")
      );
      return checkingIndex !== -1 ? checkingIndex : 0;
    }
    return 0;
  });

  const copyText = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => toast("Copied to clipboard!"));
  };

  const account =
    allAccountDetails && allAccountDetails.length > 0
      ? allAccountDetails[selectedAccountIndex]
      : {
          balance: 0,
          accountNumber: "N/A",
          routingNumber: "N/A",
          holder: "Unknown",
          type: "No Account",
          status: "Inactive",
        };

  const handleToggleAccount = () => {
    if (allAccountDetails && allAccountDetails.length > 1) {
      setSelectedAccountIndex((prevIndex) =>
        prevIndex === allAccountDetails.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="mb-8">
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
              <span className="text-2xl">💳</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {account.type.includes("Checking")
                  ? "Checking Account"
                  : "Savings Account"}
              </h2>
              <p className="text-sm text-gray-500">Personal Banking</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              className="bg-primary-500/90 hover:bg-primary-600 cursor-pointer backdrop-blur-sm rounded-xl p-3 transition-colors duration-200"
              onClick={handleToggleAccount}
              aria-label={
                allAccountDetails && allAccountDetails.length > 1
                  ? `Switch to ${
                      account.type.includes("Checking")
                        ? "Savings Account"
                        : "Checking Account"
                    }`
                  : "No additional accounts to switch to"
              }
              disabled={!(allAccountDetails && allAccountDetails.length > 1)}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                ></path>
              </svg>
            </button>
            <div className="w-px h-6 bg-gray-200"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6">
              <p className="text-sm font-medium text-primary-600 mb-1">
                Available Balance
              </p>
              <p className="text-3xl font-semibold text-gray-900">
                $
                {account.balance.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <div className="mt-4 flex items-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  {account.type}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">Account Number</p>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-lg text-gray-900">
                    {formatAccountNumber(account.accountNumber)}
                  </p>
                  <button
                    className="p-2 cursor-pointer rounded-full hover:bg-primary-100 transition-colors duration-200"
                    title="Copy account number"
                    onClick={() => copyText(account.accountNumber)}
                    disabled={account.accountNumber === "N/A"}
                  >
                    <span
                      className={`${
                        account.accountNumber === "N/A"
                          ? "text-gray-300"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      📋
                    </span>
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">Routing Number</p>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-lg text-gray-900">
                    {account.routingNumber}
                  </p>
                  <button
                    className="p-2 cursor-pointer rounded-full hover:bg-primary-100 transition-colors duration-200"
                    title="Copy routing number"
                    onClick={() => copyText(account.routingNumber)}
                    disabled={account.routingNumber === "N/A"}
                  >
                    <span
                      className={`${
                        account.routingNumber === "N/A"
                          ? "text-gray-300"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      📋
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">
              Account Information
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Account Holder</p>
                <p className="text-base font-medium text-gray-900">
                  {account.holder}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Account Type</p>
                <p className="text-base font-medium text-gray-900">
                  {account.type}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Account Status</p>
                <div className="flex items-center mt-1">
                  <div
                    className={`w-2 h-2 rounded-full mr-2 ${
                      account.status === "ACTIVE"
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }`}
                  ></div>
                  <p className="text-base font-medium text-gray-900">
                    {account.status}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
