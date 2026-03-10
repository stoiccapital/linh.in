'use client';

import { usePathname, useRouter } from 'next/navigation';
import { LOCALES, type Locale } from '../../config/preferences';

/**
 * LocaleToggle Component
 * Client-only toggle for switching between locales
 * Preserves [vertical] and [slug] segments exactly
 */
export function LocaleToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const pathParts = pathname.split('/').filter(Boolean);
  const firstSegment = pathParts[0];
  const currentLocale: Locale =
    firstSegment && LOCALES.includes(firstSegment as Locale)
      ? (firstSegment as Locale)
      : 'en';

  const switchLocale = (targetLocale: Locale) => {
    if (targetLocale === currentLocale) return;
    const newPath = '/' + [targetLocale, ...pathParts.slice(1)].join('/');
    router.replace(newPath);
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-border-subtle bg-bg-default p-1">
      <button
        type="button"
        onClick={() => switchLocale('en')}
        aria-label="Switch to English"
        className={`px-3 py-1 text-xs rounded-full transition-colors ${
          currentLocale === 'en'
            ? 'bg-bg-neutral text-text-primary'
            : 'text-text-secondary hover:bg-bg-neutral'
        }`}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => switchLocale('vn')}
        aria-label="Switch to Vietnamese"
        className={`px-3 py-1 text-xs rounded-full transition-colors ${
          currentLocale === 'vn'
            ? 'bg-bg-neutral text-text-primary'
            : 'text-text-secondary hover:bg-bg-neutral'
        }`}
      >
        Vietnamese
      </button>
    </div>
  );
}
