import React from "react";
import Link from "next/link";
import SignUpForm from "@/components/forms/auth/sign-up-form";

const SignUpPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="min-h-screen flex flex-col justify-center py-10 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-2">
          <Link href="/" className="inline-block">
            <p className="text-2xl font-bold tracking-tight text-primary">
              FinTrust Bank
            </p>
          </Link>
          <h2 className="text-3xl font-serif font-bold text-foreground">
            Create your account
          </h2>
          <p className="text-sm text-muted-foreground">
            Join FinsTrust Digital Bank
          </p>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-4xl">
          <SignUpForm />
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
