import { Col, Row } from 'antd';
import { AnimatedCard } from '../components/AnimatedCard';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { SectionTitle } from '../components/SectionTitle';
import { StatCard } from '../components/StatCard';
import { stats } from '../data/content';
import { usePageMeta } from '../hooks/usePageMeta';

export const ResultsPage = () => {
  usePageMeta('Results & Achievements', 'Review student achievements, pass rates, branch scale, and university selection performance at CFTL.');

  return (
    <div className="page-container">
      <PageHeader title="Results and Achievements" subtitle="Consistent student outcomes through structured residential preparation." />

      <MotionSection>
        <SectionTitle title="Key Statistics" />
        <Row gutter={[16, 16]}>
          {stats.map((s) => (
            <Col xs={12} md={6} key={s.title}>
              <StatCard title={s.title} value={s.value} suffix={s.suffix} />
            </Col>
          ))}
        </Row>
      </MotionSection>

      <MotionSection className="page-section section-alt">
        <AnimatedCard title="Exam Success Stories">
          Placeholder results content remains here until verified student outcome stories and university admission records are supplied.
        </AnimatedCard>
      </MotionSection>
    </div>
  );
};
