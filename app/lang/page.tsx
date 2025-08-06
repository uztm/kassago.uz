'use client';

import { useTranslation } from 'react-i18next';
import '@/i18n';
import { useEffect, useState } from 'react';
import { LanguageSwitcher } from '@/components/language-switcher';

export default function HomePage() {
  const { t, ready } = useTranslation('common');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // wait until after hydration
  }, []);

  if (!mounted || !ready) return null;

  return (
    <main className="p-8">
      <h1>{t('welcome')}</h1>
      <button>{t('shop_now')}</button>

      <LanguageSwitcher />
    </main>
  );
}
