import type { ReactNode } from 'react';
import { Card } from 'antd';
import { motion } from 'framer-motion';
import { cardHover, fadeInUp } from '../styles/motion';

interface AnimatedCardProps {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}

const MotionCard = motion(Card);

export const AnimatedCard = ({ title, children, className }: AnimatedCardProps) => (
  <MotionCard
    title={title}
    className={className ?? 'premium-card'}
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    whileHover={cardHover.whileHover}
    transition={cardHover.transition}
  >
    {children}
  </MotionCard>
);
