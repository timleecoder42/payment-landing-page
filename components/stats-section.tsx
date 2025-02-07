'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

const stats = [
  { value: 99.99, key: 'uptime', suffix: '%' },
  { value: 135, key: 'currencies', suffix: '+' },
  { value: 35, key: 'apiRequests', suffix: 'M+' },
  { value: 190, key: 'countries', suffix: '+' },
];

function CounterAnimation({
  value,
  suffix = '',
}: {
  value: number;
  suffix?: string;
}) {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    const startValue = 0;
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const endValue = value;
      const duration = 2000;
      const step = (endValue - startValue) / (duration / 16);

      let currentValue = startValue;
      const timer = setInterval(() => {
        currentValue += step;
        if (currentValue >= endValue) {
          setCounter(endValue);
          clearInterval(timer);
        } else {
          setCounter(currentValue);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {counter.toFixed(counter > 100 ? 0 : 2)}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const t = useTranslations('stats');
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '-40%']);

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-50px,#3b82f620,transparent)] sm:bg-[radial-gradient(circle_800px_at_50%_-100px,#3b82f620,transparent)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] sm:bg-[size:24px_24px]" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-soft-light">
        <div className="absolute inset-0 bg-repeat bg-[size:64px_64px] sm:bg-[size:128px_128px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+CiAgPGRlZnM+CiAgICA8ZmlsdGVyIGlkPSJub2lzZSI+CiAgICAgIDxmZVR1cmJ1bGVuY2UgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB0eXBlPSJmcmFjdGFsTm9pc2UiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iLjUiLz4KPC9zdmc+')]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-10 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-[80px] sm:blur-[128px] -z-10" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-[80px] sm:blur-[128px] -z-10" />

      <div className="container mx-auto relative px-4 sm:px-6">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
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
            className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto"
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.key}
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
                className="relative group bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-colors"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                <div className="text-center space-y-2 sm:space-y-3">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    <CounterAnimation value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm sm:text-base text-zinc-400 font-medium">
                    {t(`metrics.${stat.key}`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
