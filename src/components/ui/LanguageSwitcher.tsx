'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Espanol' },
  { code: 'pt', label: 'Portugues' },
];

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/10"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
          <path
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M3 12h18"
          />
          <path
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9z"
          />
        </svg>
        {selectedLanguage.label}
        <svg
          className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul
          className="absolute bottom-full left-0 mb-2 min-w-[140px] overflow-hidden rounded-lg border border-white/20 bg-primary-700 py-1 shadow-lg"
          role="listbox"
        >
          {languages.map((language) => (
            <li key={language.code}>
              <button
                onClick={() => handleLanguageSelect(language)}
                className={cn(
                  'w-full px-4 py-2 text-left text-sm text-white transition-colors hover:bg-white/10',
                  selectedLanguage.code === language.code && 'bg-white/10'
                )}
                role="option"
                aria-selected={selectedLanguage.code === language.code}
              >
                {language.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
