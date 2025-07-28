"use client";

import { LoginSchema } from "@/schemas";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { login } from "@/actions/login";
import { useRouter } from "next/navigation";

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
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const SignInForm = () => {
  const router = useRouter();

  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");

    startTransition(() => {
      login(values).then((data) => {
        if (data?.error) {
          setError(data.error);
        } else {
          if (data?.redirect) {
            router.push(data.redirect);
          }
        }
      });
    });
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-md p-8 rounded-xl bg-card border">
       
        <h2 className="mt-6 text-3xl font-serif font-bold">Welcome Back</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to access your account
        </p>

        {error && (
          <Alert variant="destructive" className="mt-4 border-destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="mt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex items-center">
                      <FormControl>
                        <Checkbox
                          id="rememberMe"
                          className="border-foreground mt-[0.22rem] rounded-xs size-4 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground transition-colors"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormLabel
                        htmlFor="rememberMe"
                        className="!mb-0 text-sm text-foreground cursor-pointer"
                      >
                        Remember me
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>

              <Button type="submit" disabled={isPending} className="w-full bg-gradient-to-br from-primary-600 to-accent-600">
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
                  "Continue"
                )}
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center">
            <p className="text-sm text-foreground">
              {"Don't have an account? "}
              <Link
                href="/sign-up"
                className="font-medium text-primary-900 hover:text-primary-700 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
