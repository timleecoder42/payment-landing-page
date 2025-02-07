'use client';

import { motion } from 'framer-motion';

export function AnimatedGradient() {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 opacity-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      style={{
        backgroundSize: '200% 200%',
        animation: 'gradient 15s ease infinite',
      }}
    />
  );
}
