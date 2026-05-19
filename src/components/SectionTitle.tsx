import { Typography } from 'antd';
import { motion } from 'framer-motion';
import { fadeInUp } from '../styles/motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => (
  <motion.div
    className="section-title"
    style={{ textAlign: centered ? 'center' : 'left' }}
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <Typography.Title level={2}>{title}</Typography.Title>
    {subtitle ? (
      <Typography.Paragraph className="section-subtitle" style={{ margin: centered ? '0 auto' : 0 }}>
        {subtitle}
      </Typography.Paragraph>
    ) : null}
  </motion.div>
);
