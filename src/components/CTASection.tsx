import { Button, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { MotionSection } from './MotionSection';

interface CTASectionProps {
  title: string;
  description: string;
  buttonLabel: string;
  to: string;
}

export const CTASection = ({ title, description, buttonLabel, to }: CTASectionProps) => (
  <MotionSection>
    <div className="cta-block">
      <Typography.Title level={3}>{title}</Typography.Title>
      <Typography.Paragraph>{description}</Typography.Paragraph>
      <Space>
        <Link to={to}>
          <Button type="primary" size="large">{buttonLabel}</Button>
        </Link>
      </Space>
    </div>
  </MotionSection>
);
