import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

const SECTION_LENGTHS = {
  products: 16,
  solutions: 9,
  developers: 8,
  resources: 9,
} as const;

export function SiteFooter() {
  const t = useTranslations('footer');
  const getLinks = (section: keyof typeof SECTION_LENGTHS) => {
    const links = [];
    for (let i = 1; i <= SECTION_LENGTHS[section]; i++) {
      links.push(t(`links.${section}.${i}`));
    }
    return links;
  };

  return (
    <footer className="relative border-t bg-gradient-to-b from-background to-muted/30">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[80px] sm:blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[80px] sm:blur-[120px] -z-10" />

      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="space-y-6">
              <Link
                href="/"
                className="font-bold text-xl sm:text-2xl block hover:opacity-80 transition-opacity"
              >
                Company
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                {t('tagline')}
              </p>
            </div>
            <div className="flex gap-4 mt-6 sm:mt-8">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white/5 transition-colors h-9 w-9"
              >
                <span className="sr-only">{t('socialLinks.x')}</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5">
                  <path
                    fill="currentColor"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white/5 transition-colors h-9 w-9"
              >
                <span className="sr-only">{t('socialLinks.github')}</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5">
                  <path
                    fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white/5 transition-colors h-9 w-9"
              >
                <span className="sr-only">{t('socialLinks.linkedin')}</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5">
                  <path
                    fill="currentColor"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="font-semibold text-sm uppercase tracking-wider">
              {t('sections.products')}
            </h3>
            <ul className="space-y-2.5">
              {getLinks('products').map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block py-0.5"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6">
              {t('sections.solutions')}
            </h3>
            <ul className="space-y-3">
              {getLinks('solutions').map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6">
              {t('sections.developers')}
            </h3>
            <ul className="space-y-3">
              {getLinks('developers').map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6">
              {t('sections.resources')}
            </h3>
            <ul className="space-y-3">
              {getLinks('resources').map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">{t('copyright')}</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('legal.privacy')}
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('legal.terms')}
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('legal.cookieSettings')}
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('legal.sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
