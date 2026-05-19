import { Typography } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import type { Testimonial } from '../types/content';
import { AnimatedCard } from './AnimatedCard';

export const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <AnimatedCard>
    <MessageOutlined className="feature-icon" />
    <Typography.Paragraph style={{ fontStyle: 'italic' }}>
      "{testimonial.quote}"
    </Typography.Paragraph>
    <Typography.Text strong>{testimonial.name}</Typography.Text>
    <br />
    <Typography.Text type="secondary">{testimonial.role}</Typography.Text>
  </AnimatedCard>
);
