"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { PasskeySchema } from "@/schemas";
import { verifyPasskey } from "@/actions/verify-passkey";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const VerifyPasskeyForm = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [digits, setDigits] = useState<string[]>(Array(6).fill(""));

  const form = useForm<z.infer<typeof PasskeySchema>>({
    resolver: zodResolver(PasskeySchema),
    defaultValues: { email, passkey: "" },
  });

  useEffect(() => {
    form.setValue("email", email);
  }, [email, form]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit = () => {
    const passkey = digits.join("");
    form.setValue("passkey", passkey);
    setError(null);
    startTransition(() => {
      verifyPasskey({ email, passkey }).then((data) => {
        if (data?.error) {
          setError(data.error);
        } else if (data?.redirect) {
          router.push(data.redirect);
        }
      });
    });
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-md space-y-6 p-6 rounded-xl border bg-background shadow">
        <div className="flex justify-center md:justify-start">
          <p className="text-xl font-bold text-foreground">Logo</p>
        </div>

        <div>
          <h2 className="text-3xl font-serif font-bold text-foreground">
            Verify OTP
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter the OTP to complete sign in
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="border-destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-foreground"
            >
              One-Time Password (OTP)
            </label>
            <div className="my-2 relative">
              <div className="absolute top-[0.8rem] left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex justify-between gap-2 pl-10">
                {digits.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="w-12 h-12 text-center text-xl border border-border bg-background text-foreground rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary font-mono tracking-widest"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    disabled={isPending}
                  />
                ))}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Enter the 6-digit code from your email
              </p>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button
              type="button"
              variant="outline"
              className="w-1/2"
              onClick={() => router.back()}
              disabled={isPending}
            >
              Back
            </Button>
            <Button type="submit" className="w-1/2" disabled={isPending}>
              {isPending ? "Verifying..." : "Verify & Sign In"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default VerifyPasskeyForm;
