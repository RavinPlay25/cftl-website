import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../styles/motion';

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const MotionSection = ({ children, className, delay = 0 }: MotionSectionProps) => (
  <motion.section
    className={className}
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    transition={{ delay }}
  >
    {children}
  </motion.section>
);
