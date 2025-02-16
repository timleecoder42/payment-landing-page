import { setRequestLocale } from 'next-intl/server';

import Home from '@/components/home';
import { routing } from '@/i18n/routing';

export const generateStaticParams = async () => {
  return routing.locales.map((locale) => ({ locale }));
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <Home />;
}
