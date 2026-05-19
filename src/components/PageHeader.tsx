import { Typography } from 'antd';
import { MotionSection } from './MotionSection';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <MotionSection className="page-header">
    <Typography.Title level={1} className="page-header-title">
      {title}
    </Typography.Title>
    <Typography.Paragraph className="page-header-subtitle">{subtitle}</Typography.Paragraph>
  </MotionSection>
);
