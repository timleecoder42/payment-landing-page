'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-80 transition-opacity flex flex-col"
        style={{
          animation: 'none',
          transform: 'none',
        }}
      >
        <SheetHeader className="border-b pb-4 mb-4">
          <SheetTitle className="text-lg">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-1">
            <Link
              href="#"
              className="px-4 py-2.5 text-base font-medium hover:bg-primary/5 rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              {t('products')}
            </Link>
            <Link
              href="#"
              className="px-4 py-2.5 text-base font-medium hover:bg-primary/5 rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              {t('solutions')}
            </Link>
            <Link
              href="#"
              className="px-4 py-2.5 text-base font-medium hover:bg-primary/5 rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              {t('developers')}
            </Link>
            <Link
              href="#"
              className="px-4 py-2.5 text-base font-medium hover:bg-primary/5 rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              {t('resources')}
            </Link>
            <Link
              href="#"
              className="px-4 py-2.5 text-base font-medium hover:bg-primary/5 rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              {t('pricing')}
            </Link>
          </div>
        </nav>
        <div className="border-t pt-4 mt-auto space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start h-11"
            onClick={() => setOpen(false)}
          >
            {t('signIn')}
          </Button>
          <Button
            className="w-full justify-start h-11"
            onClick={() => setOpen(false)}
          >
            {t('contactSales')}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
