import { Card, Statistic } from 'antd';
import { motion } from 'framer-motion';
import { cardHover, fadeInUp } from '../styles/motion';

const MotionCard = motion(Card);

interface StatCardProps {
  title: string;
  value: number;
  suffix?: string;
}

export const StatCard = ({ title, value, suffix }: StatCardProps) => (
  <MotionCard
    className="premium-card stat-card"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    whileHover={cardHover.whileHover}
    transition={cardHover.transition}
  >
    <Statistic title={title} value={value} suffix={suffix} />
  </MotionCard>
);
