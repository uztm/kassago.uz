'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import '@/i18n';

export default function Pricing() {
  const { t, ready } = useTranslation('common');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted || !ready) return null;

  const features = [
    t('pricing.features.1'),
    t('pricing.features.2'),
    t('pricing.features.3'),
    t('pricing.features.4'),
    t('pricing.features.5'),
    t('pricing.features.6'),
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#1E32FA] opacity-10 rounded-full blur-[180px] z-0 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight text-gray-900">
          {t('pricing.title')}
        </h2>
        <p className="text-lg text-gray-500 mb-16 max-w-xl mx-auto">
          {t('pricing.subtitle')}
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-5xl mx-auto">
          <div className="text-left w-full lg:w-1/2">
            <div className="mb-6">
              <h3 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
                {t('pricing.priceTitle')}
              </h3>
              <p className="text-base text-gray-600">{t('pricing.priceDescription')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
              {features.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1E32FA]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="bg-[#1E32FA] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1727cf] transition">
                {t('pricing.cta')}
              </button>
            </div>
          </div>

          <div className="relative w-[260px] h-[520px] shrink-0">
            <Image
              src="/images/pos-mockup.png"
              alt="POS App Mockup"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
