import type { PageCopyConfig } from '../config/types';
import enData from './en.json';

const localeData: Record<'en', Record<string, PageCopyConfig>> = {
  en: enData as Record<string, PageCopyConfig>,
};

export function loadPageCopy(
  locale: 'en',
  lpId: string
): PageCopyConfig | null {
  const data = localeData[locale];
  return data[lpId] || null;
}

export type ShellMessages = {
  navbar: {
    brand: string;
    links: {
      features: string;
      pricing: string;
      useCases: string;
      faq: string;
    };
    cta: string;
    ariaLabels: {
      goToHomepage: string;
      openMenu: string;
      closeMenu: string;
    };
  };
  footer: {
    copyright: string;
    links: {
      privacy: string;
      terms: string;
      contact: string;
    };
  };
};

const shellMessages: Record<'en', ShellMessages> = {
  en: {
    navbar: {
      brand: 'Linh Enterprise',
      links: {
        features: 'Features',
        pricing: 'Pricing',
        useCases: 'Use Cases',
        faq: 'FAQ',
      },
      cta: 'Get Started',
      ariaLabels: {
        goToHomepage: 'Go to homepage',
        openMenu: 'Open main menu',
        closeMenu: 'Close main menu',
      },
    },
    footer: {
      copyright: '© 2024 Company Name. All rights reserved.',
      links: {
        privacy: 'Privacy',
        terms: 'Terms',
        contact: 'Contact',
      },
    },
  },
};

export function getMessages(locale: 'en'): ShellMessages {
  return shellMessages[locale];
}

