"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full px-6 py-4 flex justify-between fixed top-0 items-center bg-white z-50">
      <div className="flex items-center justify-center">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-5">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={48}
            className="mr-4"
          />
        </a>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-black">
          <a href="#features">Возможности</a>
          <a href="#pricing">Тарифы</a>
          {/* <a href="#">Для бизнеса</a> */}
          <a href="#">Скачайте приложение</a>
          <a href="#">Поддержка</a>
        </div>
      </div>

      {/* Right: Language, Download Button, Mobile Menu */}
      <div className="flex items-center gap-4">
        {/* Language Selector */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-sm">RU</span>
          <span>▼</span>
        </div>

        {/* Download Button */}
        <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
          Скачать приложение
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-blue-600 text-white transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 text-xl font-bold px-6 mt-4">
          <li>
            <Link href="#features">Возможности</Link>
          </li>
          <li>
            <Link href="#pricing">Тарифы</Link>
          </li>
          <li>
            {/* <Link href="#">Для бизнеса</Link> */}
          </li>
          <li>
            <Link href="#">Скачайте приложение </Link>
          </li>
          <li>
            <Link href="#">Поддержка</Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
          {[
            { src: "/images/instagram.svg", alt: "Instagram" },
            { src: "/images/tiktok.svg", alt: "TikTok" },
            { src: "/images/whatsapp.svg", alt: "WhatsApp" },
            { src: "/images/telegram.svg", alt: "Telegram" },
            { src: "/images/chat.svg", alt: "Chat" },
          ].map((icon, i) => (
            <Image
              key={i}
              src={icon.src}
              alt={icon.alt}
              width={40}
              height={40}
              className="bg-white rounded-full p-2"
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
