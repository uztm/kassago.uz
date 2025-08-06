"use client";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import {
  Instagram,
  MessageCircle,
  MessageSquare,
  PhoneCall,
  Send,
} from "lucide-react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const [currentLang, setCurrentLang] = useState(i18n.language);

  const { t } = useTranslation("common");

  const [langKey, setLangKey] = useState(i18n.language);

  useEffect(() => {
    const handleLangChange = (lng: string) => {
      setLangKey(lng); // bu komponentni qayta render qiladi
    };
    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, []);

  useEffect(() => {
    const handleLangChange = (lng: string) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLangChange);
    return () => {
      i18n.off("languageChanged", handleLangChange);
    };
  }, []);

  const translatedTitle = t("meta.title", "KassaGo — POS tizimi");
  const translatedDescription = t(
    "meta.description",
    "KassaGo — Do'konlar uchun zamonaviy POS tizimi"
  );

  const languages = [
    { code: "uz", label: "Oʻzbekcha" },
    { code: "ru", label: "Русский" },
  ];

  const changeLanguage = async (lang: string) => {
    console.log("[i18n] changeLanguage called:", lang);

    try {
      await i18n.changeLanguage(lang);

      setLangDropdownOpen(false);
    } catch (err) {
      console.error("[i18n] Failed to change language:", err);
    }
  };

  const navLinks = [
    { href: "#features", label: t("nav.features") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#download", label: t("nav.download") },
    { href: "#", label: t("nav.support") },
  ];

  return (
    <>
      <Head>
        <title>{translatedTitle}</title>
        <meta name="description" content={translatedDescription} />
        <meta property="og:title" content={translatedTitle} />
        <meta property="og:description" content={translatedDescription} />
        <meta name="robots" content="index, follow" />
      </Head>
      <nav className="w-full px-6 py-4 h-[80px] flex justify-between fixed top-0 items-center bg-white z-50">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-5">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={100}
              height={48}
              className="mr-4"
            />
          </Link>

          <div className="hidden md:flex gap-6 text-sm font-medium text-black">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 relative">
          {/* Language Dropdown - stays here */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="text-sm flex text-black items-center gap-1"
            >
              {currentLang.toUpperCase()} ▼
            </button>
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-black px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                      currentLang === lang.code ? "font-semibold" : ""
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Download button */}
          <button className="bg-black text-xs text-white md:text-sm px-4 py-2 rounded-full">
            {t("nav.download")}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 bg-blue-600 text-white transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-6">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-xl font-bold px-6 mt-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: MessageCircle, label: "TikTok" },
              { icon: PhoneCall, label: "WhatsApp" },
              { icon: Send, label: "Telegram" },
              { icon: MessageSquare, label: "Chat" },
            ].map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="bg-white rounded-full p-2 flex items-center justify-center"
                title={label}
              >
                <Icon className="w-6 h-6 text-black" />
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
