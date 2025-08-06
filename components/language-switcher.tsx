'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import i18n from '@/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { GlobeIcon } from 'lucide-react';

const languages = [
  { code: 'uz', label: 'O‘zbek' },
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
];

export function LanguageSwitcher() {
  const { i18n: i18next, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18next.language);

  useEffect(() => {
    console.log('[i18n] Detected initial language:', i18next.language);
    setCurrentLang(i18next.language);
  }, []);

  // Watch i18n language changes
  useEffect(() => {
    const onLangChanged = (lng: string) => {
      console.log('[i18n] Language changed to:', lng);
      setCurrentLang(lng);
    };

    i18next.on('languageChanged', onLangChanged);

    return () => {
      i18next.off('languageChanged', onLangChanged);
    };
  }, [i18next]);

  const changeLanguage = (lng: string) => {
    console.log('[i18n] changeLanguage called:', lng);
    i18n.changeLanguage(lng).then(() => {
      console.log('[i18n] changeLanguage completed:', lng);
    }).catch((err) => {
      console.error('[i18n] Failed to change language:', err);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <GlobeIcon size={16} />
          {languages.find((l) => l.code === currentLang)?.label || 'Language'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={currentLang === lang.code ? 'font-semibold' : ''}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
