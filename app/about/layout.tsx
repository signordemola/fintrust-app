import type { Metadata } from "next";
import ".././globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title:
    "About Page | Fintrust Credit Union | Your Financial Family Since 1973",
  description:
    "Fintrust Credit Union - Your trusted financial partner since 1973. We offer personal and business banking solutions designed around your life and goals.",
  icons: {
    icon: "/logo.ico",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
