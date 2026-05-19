import { Col, Collapse, List, Row } from 'antd';
import { AnimatedCard } from '../components/AnimatedCard';
import { InquiryForm } from '../components/InquiryForm';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { admissionsSteps } from '../data/content';
import { usePageMeta } from '../hooks/usePageMeta';

export const AdmissionsPage = () => {
  usePageMeta('Admissions & Inquiry', 'Submit a CFTL inquiry and understand the admissions process for O/L and A/L programs.');
  return (
    <div className="page-container">
      <PageHeader title="Admissions and Inquiry" subtitle="Submit your details and our team will guide you through program selection and enrollment." />
      <MotionSection>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={14}><AnimatedCard title="Inquiry Form"><InquiryForm /></AnimatedCard></Col>
          <Col xs={24} lg={10}>
            <AnimatedCard title="Admissions Process" className="premium-card" >
              <List dataSource={admissionsSteps} renderItem={(step, index) => <List.Item>{index + 1}. {step}</List.Item>} />
            </AnimatedCard>
            <div style={{ marginTop: 16 }}>
              <AnimatedCard title="FAQs">
                <Collapse items={[{ key: '1', label: 'When does intake begin?', children: 'Placeholder: Multiple intakes are expected throughout the year.' }, { key: '2', label: 'Can parents visit the campus?', children: 'Placeholder: Parent visits can be arranged based on branch policies.' }]} />
              </AnimatedCard>
            </div>
          </Col>
        </Row>
      </MotionSection>
    </div>
  );
};
