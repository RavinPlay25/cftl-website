import { Col, Row, Timeline, Typography } from 'antd';
import { AnimatedCard } from '../components/AnimatedCard';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { SectionTitle } from '../components/SectionTitle';
import { usePageMeta } from '../hooks/usePageMeta';

export const AboutPage = () => {
  usePageMeta(
    'About',
    'Learn how College of Fast Track Learning was founded in 2008 by Dr. Susantha Prabath Kodithuwakku and how the residential model supports structured learning.',
  );

  return (
    <div className="page-container">
      <PageHeader
        title="About CFTL"
        subtitle="Founded in 2008 by Dr. Susantha Prabath Kodithuwakku, CFTL was established to give Sri Lankan students an accelerated residential pathway to academic excellence."
      />

      <MotionSection>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <AnimatedCard title="Our Story">
              College of Fast Track Learning was established with the vision of helping students achieve academic excellence through a fully residential model built on structured learning, continuous guidance, and a disciplined study environment.
            </AnimatedCard>
          </Col>
          <Col xs={24} lg={12}>
            <AnimatedCard title="Mission">
              To provide high-quality residential education through dedicated guidance, disciplined learning environments, and innovative academic systems that help students reach their full potential.
            </AnimatedCard>
          </Col>
          <Col xs={24} lg={12}>
            <AnimatedCard title="Vision">
              To empower students through structured residential education and accelerated learning methodologies, enabling them to achieve academic excellence and become responsible contributors to society.
            </AnimatedCard>
          </Col>
          <Col xs={24} lg={12}>
            <AnimatedCard title="Academic Approach">
              CFTL combines classroom learning, structured study schedules, dedicated supervision, and continuous academic support to create a consistent path to progress.
            </AnimatedCard>
          </Col>
        </Row>
      </MotionSection>

      <MotionSection className="page-section section-alt">
        <SectionTitle title="Timeline" />
        <Timeline
          items={[
            { children: '2008: College of Fast Track Learning was founded by Dr. Susantha Prabath Kodithuwakku.' },
            { children: 'Growth: The residential academic model expanded across multiple branch locations.' },
            { children: 'Today: CFTL continues to focus on structured study, supervision, and exam readiness.' },
          ]}
        />
        <Typography.Paragraph type="secondary" style={{ marginTop: 14, marginBottom: 0 }}>
          CFTL remains committed to residential education that is disciplined, supportive, and outcome-focused.
        </Typography.Paragraph>
      </MotionSection>
    </div>
  );
};
