'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import '@/i18n';

export default function Footer() {
  const { t, ready } = useTranslation('common');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted || !ready) return null;

  return (
    <footer className="bg-white text-[#0F172A] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="Company Logo" width={120} height={40} className="mb-6" />
          </Link>
          <p className="text-sm text-gray-400 mb-4">{t('footer.about')}</p>
          <div className="flex gap-4">
            <a href="#"><Image src="/images/appstore.png" alt="App Store" width={120} height={40} /></a>
            <a href="#"><Image src="/images/pmarket.png" alt="Google Play" width={120} height={40} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-[#0F172A]">{t('footer.product')}</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">{t('footer.product.features')}</Link></li>
            <li><Link href="#">{t('footer.product.pricing')}</Link></li>
            <li><Link href="#">{t('footer.product.partners')}</Link></li>
            <li><Link href="#">{t('footer.product.download')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-[#0F172A]">{t('footer.company')}</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">{t('footer.company.about')}</Link></li>
            <li><Link href="#">{t('footer.company.contacts')}</Link></li>
            <li><Link href="#">{t('footer.company.support')}</Link></li>
            <li><Link href="#">{t('footer.company.faq')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-[#0F172A]">{t('footer.contact')}</h4>
          <p className="text-sm text-gray-400 mb-4">{t('footer.contact.email')}</p>
          <div className="flex gap-4">
            {[
              { src: "/images/telegram.svg", alt: "Telegram" },
              { src: "/images/instagram.svg", alt: "Instagram" },
              { src: "/images/whatsapp.svg", alt: "WhatsApp" },
            ].map((icon, i) => (
              <a key={i} href="#"><Image src={icon.src} alt={icon.alt} width={24} height={24} /></a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
