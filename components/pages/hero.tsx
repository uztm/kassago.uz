'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { t, ready } = useTranslation('common');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted || !ready) return null;

  return (
    <section className="relative w-full min-h-[80vh] px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-xl overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 max-w-7xl mx-auto">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            {t('hero.subtitle')}
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            {t('hero.cta')}
          </button>
          <div className="mt-6 text-sm text-white/80">
            <span className="inline-block border-l-4 pl-3 border-white">
              {t('hero.badge')}
            </span>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px]">
            <Image
              src="/images/herophone.png"
              alt="App Mockup"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
