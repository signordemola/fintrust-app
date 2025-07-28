"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HomeNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-br from-primary-600 to-accent-600 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={closeMobileMenu}
        >
          <Image
            src="https://fintok.bravisthemes.com/wp-content/uploads/2025/02/logo.webp"
            alt="FinTrust Credit Union Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-text-white text-xl font-bold uppercase">
            Fintrustcu
          </span>
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className="text-text-white hover:text-primary-500 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-text-white hover:text-primary-500 transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-text-white hover:text-primary-500 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-text-white hover:text-primary-500 transition-colors duration-200"
          >
            Contact
          </Link>
          <Button
            variant="outline"
            className="text-primary-500 border-text-white hover:bg-text-white hover:text-primary-900 rounded-full px-6 py-2"
          >
            <Link href={`/sign-in`}>Sign In</Link>
          </Button>
          <Button className="bg-primary-500 text-text-white px-6 py-2 rounded-full hover:bg-primary-600">
            Sign Up
          </Button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-primary-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 z-[999] animate-fade-in">
          <Link
            href="/"
            className="text-text-white text-2xl hover:text-primary-500"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-text-white text-2xl hover:text-primary-500"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-text-white text-2xl hover:text-primary-500"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-text-white text-2xl hover:text-primary-500"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <Button
            variant="outline"
            className="w-48 text-text-white border-text-white hover:bg-text-white hover:text-primary-900 rounded-full px-6 py-3 text-lg"
            onClick={closeMobileMenu}
          >
            Sign In
          </Button>
          <Button
            className="w-48 bg-primary-500 text-text-white px-6 py-3 rounded-full hover:bg-primary-600 text-lg"
            onClick={closeMobileMenu}
          >
            Sign Up
          </Button>
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;
