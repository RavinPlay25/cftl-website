import { Tag, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import type { Program } from '../types/content';
import { AnimatedCard } from './AnimatedCard';

export const ProgramCard = ({ program }: { program: Program }) => (
  <AnimatedCard title={program.title}>
    <Tag color="red" style={{ marginBottom: 12, borderRadius: 999 }}>{program.duration}</Tag>
    <Typography.Paragraph>{program.summary}</Typography.Paragraph>
    <ul>
      {program.highlights.map((highlight) => (
        <li key={highlight} style={{ marginBottom: 8, color: '#4b5563' }}>
          <CheckCircleOutlined style={{ color: '#E60023', marginRight: 8 }} />
          {highlight}
        </li>
      ))}
    </ul>
  </AnimatedCard>
);
