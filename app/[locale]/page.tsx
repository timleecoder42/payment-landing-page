import { SiteHeader } from '@/components/site-header';
import { PromoBanner } from '@/components/promo-banner';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { StatsSection } from '@/components/stats-section';
import { CTASection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';
import { PartnerLogos } from '@/components/partner-logos';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export const generateStaticParams = async () => {
  return routing.locales.map((locale) => ({ locale }));
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <SiteHeader />
      <main>
        <PromoBanner />
        <HeroSection />
        <PartnerLogos />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
