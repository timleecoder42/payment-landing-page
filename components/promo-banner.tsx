import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function PromoBanner() {
  const t = useTranslations('promo');

  return (
    <div className="bg-black/5 py-2">
      <div className="container mx-auto">
        <Link
          href="#"
          className="flex items-center justify-center gap-2 text-sm font-medium hover:text-primary"
        >
          <span className="hidden sm:inline">{t('sessions')}</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-center">{t('registration')}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
