import { Col, Row } from 'antd';
import { FeatureCard } from '../components/FeatureCard';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { usePageMeta } from '../hooks/usePageMeta';

export const FacilitiesPage = () => {
  usePageMeta('Facilities', 'See CFTL residential facilities including accommodation, study halls, classrooms, and safety supervision.');
  const items = ['Accommodation', 'Study halls', 'Classrooms', 'Dining', 'Supervision', 'Safety'];

  return (
    <div className="page-container">
      <PageHeader title="Facilities" subtitle="A complete residential ecosystem that supports academic focus, discipline, and wellbeing." />
      <MotionSection>
        <Row gutter={[16, 16]}>
          {items.map((item) => (
            <Col xs={24} sm={12} lg={8} key={item}>
              <FeatureCard title={item} description={`Placeholder details for ${item.toLowerCase()} at CFTL branches.`} />
            </Col>
          ))}
        </Row>
      </MotionSection>
    </div>
  );
};
