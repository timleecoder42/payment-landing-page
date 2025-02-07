'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatedGradient } from './ui/animated-gradient';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function HeroSection() {
  const t = useTranslations('hero');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const descriptionY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const formY = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);

  return (
    <div ref={containerRef} className="relative min-h-[calc(100vh-4rem)]">
      <AnimatedGradient />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 aspect-square rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 aspect-square rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative container mx-auto pt-12 sm:pt-20 lg:pt-32 pb-8 sm:pb-12 lg:pb-20 px-4 sm:px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6 sm:space-y-10">
            <motion.div
              variants={itemVariants}
              className="space-y-6 sm:space-y-8"
              style={{ y: titleY }}
            >
              <div className="inline-flex items-center rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-sm font-semibold bg-white/5 text-white/90 ring-1 ring-white/20 shadow-sm">
                {t('badge')}
                <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <motion.h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white [text-wrap:balance] [text-shadow:0_4px_8px_rgba(0,0,0,0.15)] leading-[1.1]">
                {t('title.start')}
                <span className="inline-block text-white/90 [text-shadow:0_0_8px_rgba(255,255,255,0.4)]">
                  {t('title.highlight')}
                </span>
                {t('title.end')}
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-white/90 max-w-xl leading-relaxed font-medium"
                style={{ y: descriptionY }}
              >
                {t('description')}
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md"
              style={{ y: formY }}
            >
              <div className="flex-1 w-full">
                <Input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  className="h-11 sm:h-12 px-3 sm:px-4 bg-white/5 border-white/10 text-white placeholder:text-white/60 focus-visible:ring-1 focus-visible:ring-white/30 focus-visible:border-white/30 hover:border-white/20 shadow-sm text-sm sm:text-base transition-colors"
                />
              </div>
              <Button
                size="lg"
                className="w-full sm:w-auto h-11 sm:h-12 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-shadow"
              >
                {t('startNow')}
                <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/80"
            >
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full ring-2 ring-background bg-white/10 border border-white/20 shadow-sm"
                  />
                ))}
              </div>
              <p className="font-semibold text-white/90">{t('socialProof')}</p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="lg:block hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-2xl" />
              <div className="relative bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="h-40 bg-white/10 rounded-lg animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-white/10 rounded animate-pulse" />
                    <div className="h-4 bg-white/10 rounded w-1/2 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
