'use client'
import Nav from "@/components/core/nav";
import DownloadAppSection from "@/components/pages/DownloadAppSection";
import Features from "@/components/pages/Features";
import Footer from "@/components/pages/Footer";
import Hero from "@/components/pages/hero";
import Pricing from "@/components/pages/Pricing";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <div className="relative w-full flex pt-[85px] flex-col min-h-screen bg-white overflow-hidden">
      <Nav />

      <div className="w-full px-6 ">
        <Hero />
      </div>

      <div id="features" className="w-full px-6 py-6">
        <Features />
      </div>

      <div id="pricing" className="w-full px-6 py-6">
        <Pricing />
      </div>

      <div id="download" className="w-full px-6 py-6">
        <DownloadAppSection />
      </div>

      {/* <div className="h-[200px]"></div> */}

      <h1>{t("welcome")}</h1>
      <p>{t("home")}</p>

      <Footer />
    </div>
  );
}
