import { Col, Row } from 'antd';
import { BranchCard } from '../components/BranchCard';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { branches } from '../data/branches';
import { usePageMeta } from '../hooks/usePageMeta';

export const BranchesPage = () => {
  usePageMeta('Branches', 'Explore all seven CFTL branches and find branch-specific facilities, programs, and contact details.');

  return (
    <div className="page-container">
      <PageHeader title="Our Branches" subtitle="Discover the seven CFTL branch locations, their academic focus, and their residential facilities." />
      <MotionSection>
        <Row gutter={[16, 16]}>
          {branches.map((branch) => (
            <Col xs={24} md={12} key={branch.id}>
              <BranchCard branch={branch} />
            </Col>
          ))}
        </Row>
      </MotionSection>
    </div>
  );
};
