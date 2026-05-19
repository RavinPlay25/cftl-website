import { Button, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import type { Branch } from '../types/branch';
import { AnimatedCard } from './AnimatedCard';

export const BranchCard = ({ branch }: { branch: Branch }) => (
  <AnimatedCard>
    <img src={branch.coverImage} alt={branch.name} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginBottom: 12 }} />
    <Typography.Title level={4} style={{ marginBottom: 8 }}>{branch.shortName}</Typography.Title>
    <Typography.Paragraph type="secondary">{branch.description}</Typography.Paragraph>
    <div style={{ marginBottom: 12 }}>
      {branch.programsAvailable.map((program) => (
        <Tag key={program} color="red" style={{ borderRadius: 999, marginBottom: 6 }}>{program}</Tag>
      ))}
    </div>
    <Link to={`/branches/${branch.slug}`}>
      <Button type="primary">View Branch</Button>
    </Link>
  </AnimatedCard>
);
