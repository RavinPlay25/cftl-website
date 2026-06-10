import { Col, Collapse, Row } from 'antd';
import { AnimatedCard } from '../components/AnimatedCard';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { ProgramCard } from '../components/ProgramCard';
import { SectionTitle } from '../components/SectionTitle';
import { programs } from '../data/content';
import { usePageMeta } from '../hooks/usePageMeta';

export const ProgramsPage = () => {
  usePageMeta('Programs', 'Explore the full CFTL residential program lineup, including Secondary Education, O/L, A/L, and the 60-Day examination preparation program.');

  return (
    <div className="page-container">
      <PageHeader title="Programs" subtitle="Fast-track residential academic programs designed for focused exam readiness and long-term student development." />

      <MotionSection>
        <Row gutter={[16, 16]}>
          {programs.map((program) => (
            <Col xs={24} lg={12} key={program.key}>
              <ProgramCard program={program} />
            </Col>
          ))}
        </Row>
      </MotionSection>

      <MotionSection className="page-section">
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <AnimatedCard title="Program Support">
              Structured daily timetables, supervised self-study, subject clinics, and parent communication workflows are built into the program experience.
            </AnimatedCard>
          </Col>
          <Col xs={24} lg={12}>
            <AnimatedCard title="Academic Direction">
              Students receive mentoring, residential supervision, and clear academic pathways that support discipline and sustained progress.
            </AnimatedCard>
          </Col>
        </Row>
      </MotionSection>

      <MotionSection className="page-section section-alt">
        <SectionTitle title="Program FAQs" />
        <Collapse
          items={[
            { key: '1', label: 'Who is this suitable for?', children: 'Students who need a focused residential study environment for Secondary Education, O/L, A/L, or examination preparation.' },
            { key: '2', label: 'Which streams are available for A/L?', children: 'Biological Science, Physical Science, Commerce, Technology, and Arts are offered through the residential fast-track program.' },
            { key: '3', label: 'Do students receive guidance beyond lessons?', children: 'Yes. Students are supported with academic mentoring, career guidance, and university planning where applicable.' },
          ]}
        />
      </MotionSection>
    </div>
  );
};
