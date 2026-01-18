"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for auth_token cookie
    const checkAuth = () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("auth_token="));
      setIsLoggedIn(!!token);
    };
    checkAuth();
  }, [pathname]);

  const handleLogout = () => {
    document.cookie =
      "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    setIsLoggedIn(false);
    router.push("/login");
    router.refresh();
  };

  const isActive = (path) =>
    pathname === path
      ? "text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
      : "text-gray-300 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/10 shadow-lg"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 font-heading">
            MiniMart
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <Link href="/items" className={isActive("/items")}>
            Items
          </Link>
          <Link href="/add-item" className={isActive("/add-item")}>
            Add Item
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:from-violet-500 hover:to-indigo-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-500 hover:to-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur-md"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className={isActive("/")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/items"
              className={isActive("/items")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Items
            </Link>
            <Link
              href="/add-item"
              className={isActive("/add-item")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Add Item
            </Link>

            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 text-center"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
