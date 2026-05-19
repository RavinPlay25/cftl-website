import { Col, Row, Timeline, Typography } from 'antd';
import { AnimatedCard } from '../components/AnimatedCard';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { SectionTitle } from '../components/SectionTitle';
import { usePageMeta } from '../hooks/usePageMeta';

export const AboutPage = () => {
  usePageMeta('About', 'Learn the CFTL story, mission, vision, and core values since 2008.');

  return (
    <div className="page-container">
      <PageHeader title="About CFTL" subtitle="Founded in 2008, CFTL is publicly positioned as Sri Lanka's First and Largest Residential School Network." />

      <MotionSection>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}><AnimatedCard title="Our Story">CFTL was created to provide students and parents with a focused, supervised, and residential learning path that accelerates academic outcomes.</AnimatedCard></Col>
          <Col xs={24} lg={12}><AnimatedCard title="Mission">To build confident, disciplined, and high-performing learners through structured residential education.</AnimatedCard></Col>
          <Col xs={24} lg={12}><AnimatedCard title="Vision">To be Sri Lanka's most trusted fast-track residential education network.</AnimatedCard></Col>
          <Col xs={24} lg={12}><AnimatedCard title="Core Values">Discipline, accountability, student welfare, parent partnership, and academic excellence.</AnimatedCard></Col>
        </Row>
      </MotionSection>

      <MotionSection className="page-section section-alt">
        <SectionTitle title="Timeline" />
        <Timeline items={[{ children: '2008: CFTL founded' }, { children: '2012: Expanded residential operations' }, { children: '2018: Strengthened supervision model' }, { children: 'Today: Trusted residential fast-track network' }]} />
        <Typography.Paragraph type="secondary" style={{ marginTop: 14, marginBottom: 0 }}>A long-term commitment to structured and safe residential learning.</Typography.Paragraph>
      </MotionSection>
    </div>
  );
};
