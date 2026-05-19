import { Col, Collapse, Row } from 'antd';
import { AnimatedCard } from '../components/AnimatedCard';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { ProgramCard } from '../components/ProgramCard';
import { SectionTitle } from '../components/SectionTitle';
import { programs } from '../data/content';
import { usePageMeta } from '../hooks/usePageMeta';

export const ProgramsPage = () => {
  usePageMeta('Programs', 'Explore O/L and A/L Residential Fast Track Programs at CFTL.');
  return (
    <div className="page-container">
      <PageHeader title="Programs" subtitle="Fast-track residential academic programs designed for focused exam readiness." />

      <MotionSection>
        <Row gutter={[16, 16]}>{programs.map((program) => <Col xs={24} lg={12} key={program.key}><ProgramCard program={program} /></Col>)}</Row>
      </MotionSection>

      <MotionSection className="page-section">
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}><AnimatedCard title="Detailed Benefits">Structured daily timetables, supervised self-study, practice exams, and parent communication workflows.</AnimatedCard></Col>
          <Col xs={24} lg={12}><AnimatedCard title="Student Support">Mentoring, welfare checks, and disciplined guidance ensure students stay consistent and motivated.</AnimatedCard></Col>
        </Row>
      </MotionSection>

      <MotionSection className="page-section section-alt">
        <SectionTitle title="Program FAQs" />
        <Collapse items={[{ key: '1', label: 'Who is this suitable for?', children: 'Students requiring a focused residential study environment for O/L or A/L.' }, { key: '2', label: 'How often are parents updated?', children: 'Parents receive periodic progress updates and can contact the admissions team for support.' }, { key: '3', label: 'Is safety supervision included?', children: 'Yes. Residential supervision and student welfare are core parts of the CFTL model.' }]} />
      </MotionSection>
    </div>
  );
};
