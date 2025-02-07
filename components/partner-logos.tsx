'use client';

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';

const COMPANY_COUNT = 8;

function MarqueeGroup({
  partners,
  reverse = false,
}: {
  partners: string[];
  reverse?: boolean;
}) {
  return (
    <Marquee
      direction={reverse ? 'right' : 'left'}
      speed={30}
      gradient={false}
      pauseOnHover
      autoFill
      delay={0}
    >
      {partners.map((company, index) => (
        <div
          key={`${company}-${index}`}
          className="flex items-center justify-center min-w-[200px] h-16 px-8 mx-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <span className="text-lg font-medium text-muted-foreground/60">
            {company}
          </span>
        </div>
      ))}
    </Marquee>
  );
}

export function PartnerLogos() {
  const t = useTranslations('partners');
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '-20%']);

  const partners = Array.from({ length: COMPANY_COUNT }, (_, i) =>
    t(`companies.${i + 1}`)
  );

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div ref={containerRef} className="container mx-auto">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">{t('title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div style={{ y }} className="relative">
          <div className="flex flex-col gap-6 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
            <MarqueeGroup partners={partners} />
            <MarqueeGroup partners={partners} reverse />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
