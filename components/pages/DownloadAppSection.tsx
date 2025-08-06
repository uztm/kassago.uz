'use client';

import { useTranslation } from 'react-i18next';
import '@/i18n';

export default function DownloadAppSection() {
  const { t } = useTranslation('common');
 

  return (
    <section className="bg-[#EEF2FF] rounded-[32px] px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left mt-[50px] md:mt-[0px]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('download.title').split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <p className="text-gray-500 text-base mb-8">{t('download.subtitle')}</p>

          <div className="flex md:flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#" className="inline-flex w-1/2 md:w-3/10 overflow-hidden items-center px-5 py-3 bg-black text-white rounded-full text-sm font-medium">
              <img src="/images/appstore.png" alt="App Store" />
            </a>
            <a href="#" className="inline-flex w-1/2 md:w-3/10 overflow-hidden items-center px-5 py-3 bg-black text-white rounded-full text-sm font-medium">
              <img src="/images/pmarket.png" alt="Google Play" />
            </a>
          </div>
        </div>

        <div className="relative w-[320px] h-[460px] pt-[80px]">
          <img src="/images/phone-mockup.png" alt="App Mockup" className="object-contain" />
        </div>

        <div className="md:flex hidden w-[140px] h-[140px] bg-white p-4 rounded-2xl shadow-md items-center justify-center">
          <img src="/images/qrcode.png" alt="QR Code" width={120} height={120} />
        </div>
      </div>
    </section>
  );
}
