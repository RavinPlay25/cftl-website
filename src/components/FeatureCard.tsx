import { Typography } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { AnimatedCard } from './AnimatedCard';

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <AnimatedCard>
    <BookOutlined className="feature-icon" />
    <Typography.Title level={4}>{title}</Typography.Title>
    <Typography.Paragraph>{description}</Typography.Paragraph>
  </AnimatedCard>
);
