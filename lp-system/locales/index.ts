import type { PageCopyConfig } from '../config/types';
import enData from './en.json';
import vnData from './vn.json';

const localeData: Record<'en' | 'vn', Record<string, PageCopyConfig>> = {
  en: enData as Record<string, PageCopyConfig>,
  vn: vnData as Record<string, PageCopyConfig>,
};

export function loadPageCopy(
  locale: 'en' | 'vn',
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

const shellMessages: Record<'en' | 'vn', ShellMessages> = {
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
  vn: {
    navbar: {
      brand: 'Linh Enterprise',
      links: {
        features: 'Dịch vụ',
        pricing: 'Bảng giá',
        useCases: 'Ứng dụng',
        faq: 'Câu hỏi thường gặp',
      },
      cta: 'Bắt đầu',
      ariaLabels: {
        goToHomepage: 'Về trang chủ',
        openMenu: 'Mở menu chính',
        closeMenu: 'Đóng menu chính',
      },
    },
    footer: {
      copyright: '© 2024 Linh Enterprise. Mọi quyền được bảo lưu.',
      links: {
        privacy: 'Bảo mật',
        terms: 'Điều khoản',
        contact: 'Liên hệ',
      },
    },
  },
};

export function getMessages(locale: 'en' | 'vn'): ShellMessages {
  return shellMessages[locale];
}

