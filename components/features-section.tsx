'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  CreditCard,
  Globe,
  LineChart,
  Lock,
  Smartphone,
  Zap,
} from 'lucide-react';

const featureIcons = {
  payments: CreditCard,
  globalScale: Globe,
  analytics: LineChart,
  security: Lock,
  mobile: Smartphone,
  payouts: Zap,
};

const featureColors = {
  payments: 'from-blue-500/10 to-blue-600/10',
  globalScale: 'from-purple-500/10 to-purple-600/10',
  analytics: 'from-green-500/10 to-green-600/10',
  security: 'from-red-500/10 to-red-600/10',
  mobile: 'from-orange-500/10 to-orange-600/10',
  payouts: 'from-teal-500/10 to-teal-600/10',
};

const iconColors = {
  payments: 'text-blue-500',
  globalScale: 'text-purple-500',
  analytics: 'text-green-500',
  security: 'text-red-500',
  mobile: 'text-orange-500',
  payouts: 'text-teal-500',
};

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('features');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '-20%']);

  const features = [
    'payments',
    'globalScale',
    'analytics',
    'security',
    'mobile',
    'payouts',
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] sm:bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </div>

      {/* Radial Gradients */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 aspect-square rounded-full bg-blue-500/10 blur-[80px] sm:blur-[100px]" />
      <div className="absolute top-1/4 -right-1/4 w-1/2 aspect-square rounded-full bg-purple-500/10 blur-[80px] sm:blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/3 w-1/3 aspect-square rounded-full bg-green-500/10 blur-[80px] sm:blur-[100px]" />

      <div className="container mx-auto relative">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            {t('title')}
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <motion.div style={{ y }} className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = featureIcons[feature as keyof typeof featureIcons];
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.2 },
                    },
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-colors"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      featureColors[feature as keyof typeof featureColors]
                    } opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl -z-10`}
                  />
                  <div
                    className={`inline-flex p-3 rounded-xl bg-white/5 ${
                      iconColors[feature as keyof typeof iconColors]
                    } mb-4 sm:mb-6 ring-1 ring-white/10 group-hover:ring-white/20 transition-colors`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    {t(`${feature}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {t(`${feature}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
