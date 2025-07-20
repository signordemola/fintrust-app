"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, LogOut, User } from "lucide-react";
import { logout } from "@/actions/logout";

interface AdminNavbarProps {
  profile: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

const AdminNavbar = ({
  profile: { email, firstName, lastName },
}: AdminNavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 transition-all duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 md:h-28">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center px-3">
              <Link href="/">Home</Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <button className="p-2 text-gray-500 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-3 px-3 py-6 text-gray-700 bg-primary-50 hover:bg-primary-100"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white shadow-sm">
                    {firstName[0]}
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium lowercase">
                      {firstName} {lastName}
                    </p>
                    <p className="text-xs text-gray-500">Admin Account</p>
                  </div>
                  <ChevronDown className="hidden md:block w-5 h-5 text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-64 rounded-md shadow-md"
                align="end"
              >
                <DropdownMenuLabel className="px-4 py-2">
                  <p className="text-sm font-medium text-gray-900">{email}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 cursor-pointer rounded-lg">
                  <User className="w-5 h-5 mr-2 text-gray-500" />
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer rounded-lg">
                  <LogOut className="w-5 h-5 mr-2 text-red-500" />
                  <button
                    className="hover:text-red-700 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
