'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import '@/i18n';

export default function Features() {
  const { t, ready } = useTranslation('common');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted || !ready) return null;

  const features = [
    {
      title: t('features.1.title'),
      description: t('features.1.description'),
      image: '/images/feature-dashboard.png',
    },
    {
      title: t('features.2.title'),
      description: t('features.2.description'),
      image: '/images/feature-pay.png',
    },
    {
      title: t('features.3.title'),
      description: t('features.3.description'),
      image: '/images/feature-analayze.png',
    },
  ];

  return (
    <section className="bg-[#F5F8FF] py-16 px-6 md:px-12 rounded-2xl">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1C3343] mb-12">
        {t('features.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white rounded-[28px] px-6 pt-6 pb-0 flex flex-col items-center text-center shadow-sm"
          >
            <h3 className="text-base md:text-lg font-semibold mb-2 text-[#1C3343]">{feature.title}</h3>
            <p className="text-sm text-gray-500 mb-4 max-w-[90%]">{feature.description}</p>
            <div className="w-full flex justify-center items-end relative">
              <div className="w-[180px] h-[380px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
