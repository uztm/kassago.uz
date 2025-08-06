import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KassaGo — POS tizimi | POS система и автоматизация торговли",
  description:
    "KassaGo — Do'konlar uchun mobil POS tizimi. Savdoni avtomatlashtiring! Магазинлар учун POS система. Управляйте продажами с телефона.",
  keywords: [
    // Uzbek
    "POS tizimi",
    "savdo avtomatlashtirish",
    "do'kon uchun dastur",
    "magazin uchun POS",
    "telefon kassa",
    // Russian
    "POS система",
    "автоматизация торговли",
    "кассовая система",
    "касса телефон",
    "программа для магазина",
    "торговля автоматизация",
    // Common
    "KassaGo",
    "retail automation",
    "магазин",
    "uz pos system",
    "ru pos system",
  ],
  applicationName: "KassaGo",
  authors: [{ name: "KassaGo Team" }],
  creator: "KassaGo Team",
  publisher: "KassaGo",
  robots: "index, follow",
  themeColor: "#ffffff",
  openGraph: {
    title: "KassaGo — POS tizimi va avtomatlashtirish | POS система",
    description:
      "Mobil POS tizimi savdo uchun. POS система для автоматизации торговли.",
    url: "https://kassago.uz",
    siteName: "KassaGo",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "https://yourdomain.uz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KassaGo POS tizimi / POS система",
      },
    ],
  },
  alternates: {
    canonical: "https://kassago.uz",
    languages: {
      uz: "https://kassago.uz",
      ru: "https://kassago.uz",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
