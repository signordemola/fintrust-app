import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import HomeNavbar from "@/components/home/home-navbar";
import ScrollToTopButton from "@/components/scroll-to-top-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fintrust Credit Union | Your Financial Family Since 1973",
  description:
    "Fintrust Credit Union - Your trusted financial partner since 1973. We offer personal and business banking solutions designed around your life and goals.",
  themeColor: "#FFFFFF",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://Fintrustcu.com/",
    title: "Fintrust Credit Union | Your Financial Family Since 1973",
    description:
      "Your trusted financial partner since 1973. We offer personal and business banking solutions designed around your life and goals.",
    images: ["/Fintrust-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Fintrustcu",
    title: "Fintrust Credit Union | Your Financial Family Since 1973",
    description:
      "Your trusted financial partner since 1973. We offer personal and business banking solutions designed around your life and goals.",
    images: ["/Fintrust-logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <HomeNavbar />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
