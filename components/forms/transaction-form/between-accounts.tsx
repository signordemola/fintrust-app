"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { transferBetweenAccounts } from "@/actions/transfer";

interface FormData {
  fromAccount: string;
  toAccount: string;
  amount: string;
  reference: string;
}

interface BetweenAccountsFormProps {
  allAccounts: {
    id: string;
    balance: number;
    accountNumber: string;
    holder: string;
    type: string;
    status: string;
  }[];
}

export const BetweenAccountsForm = ({
  allAccounts,
}: BetweenAccountsFormProps) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormData>({
    defaultValues: {
      fromAccount: "",
      toAccount: "",
      amount: "",
      reference: "",
    },
  });

  const onSubmit = (values: FormData) => {
    setError("");
    setSuccess("");

    const amountRegex = /^\d+(\.\d{1,2})?$/;
    const referenceRegex = /^[a-zA-Z0-9\s]{0,50}$/;

    if (!amountRegex.test(values.amount)) {
      setError("Amount must be a positive number with up to 2 decimal places.");
      return;
    }
    if (!referenceRegex.test(values.reference)) {
      setError("Reference must be alphanumeric and up to 50 characters.");
      return;
    }
    if (values.fromAccount === values.toAccount) {
      setError("Cannot transfer to the same account.");
      return;
    }
    if (!values.fromAccount || !values.toAccount) {
      setError("Please select both accounts.");
      return;
    }

    startTransition(() => {
      transferBetweenAccounts({
        fromAccountId: values.fromAccount,
        toAccountId: values.toAccount,
        amount: parseFloat(values.amount),
        reference: values.reference,
      }).then((result) => {
        if (result?.error) {
          setError(result.error);
        } else if (result?.success) {
          setSuccess(result.success);
          form.reset();
        }
      });
    });
  };

  return (
    <div className="p-6 sm:p-8 animate-fadeIn">
      <div className="max-w-2xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {error && (
              <Alert variant="destructive" className="border-destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {success && (
              <Alert className="border-green-500">
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fromAccount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>From Account</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 hover:bg-white transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                        disabled={isPending}
                      >
                        <option value="">Select account</option>
                        {allAccounts.map((account) => (
                          <option key={account.id} value={account.id}>
                            {account.type} -{" "}
                            {account.balance.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="toAccount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>To Account</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 hover:bg-white transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                        disabled={isPending}
                      >
                        <option value="">Select account</option>
                        {allAccounts.map((account) => (
                          <option key={account.id} value={account.id}>
                            {account.type} - 
                            {account.balance.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <div className="relative mt-1 rounded-xl shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <Input
                        {...field}
                        type="number"
                        placeholder="0.00"
                        className="block w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 hover:bg-white transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                        min="0.01"
                        step="0.01"
                        disabled={isPending}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reference</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="What's this transfer for?"
                      className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 hover:bg-white transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isPending}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isPending ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Transfer Money"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BetweenAccountsForm;
