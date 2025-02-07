import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MobileNav } from './mobile-nav';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './language-switcher';
export function SiteHeader() {
  const t = useTranslations('nav');

  return (
    <header className="w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl">
            Company
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              {t('products')}
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              {t('solutions')}
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              {t('developers')}
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              {t('resources')}
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              {t('pricing')}
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />

          <Button variant="ghost" size="sm">
            {t('signIn')}
          </Button>
          <Button size="sm">{t('contactSales')}</Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
