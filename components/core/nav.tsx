'use client'; // Required if using app directory and state

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const toggleLang = () => setLang(lang === "EN" ? "UZ" : "EN");

  return (
    <nav className="z-10 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 h-[60px]">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="logo"
          width={120}
          height={48}
          className="object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="#price" className="text-gray-700 hover:text-blue-600">Price</Link>
          <Link href="#team" className="text-gray-700 hover:text-blue-600">Team</Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <button
            onClick={toggleLang}
            className="ml-4 px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
          >
            {lang}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
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

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-4 space-y-3 bg-white border-t border-gray-200">
          <Link href="#" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="#about" className="block text-gray-700 hover:text-blue-600">About</Link>
          <Link href="#price" className="block text-gray-700 hover:text-blue-600">Price</Link>
          <Link href="#team" className="block text-gray-700 hover:text-blue-600">Team</Link>
          <Link href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
          <button
            onClick={toggleLang}
            className="mt-2 px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
          >
            {lang}
          </button>
        </div>
      )}
    </nav>
  );
}
