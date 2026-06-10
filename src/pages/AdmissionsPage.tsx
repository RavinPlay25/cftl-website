import { Alert, Col, Collapse, List, Row, Space, Typography } from 'antd';
import { AnimatedCard } from '../components/AnimatedCard';
import { InquiryForm } from '../components/InquiryForm';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { admissionsSteps } from '../data/content';
import { usePageMeta } from '../hooks/usePageMeta';

export const AdmissionsPage = () => {
  usePageMeta(
    'Admissions & Inquiry',
    'Submit a CFTL inquiry, review the admission process, and learn about stream assessments and scholarship opportunities for O/L to A/L entry.',
  );

  return (
    <div className="page-container">
      <PageHeader title="Admissions and Inquiry" subtitle="Submit your details and our team will guide you through program selection and enrollment." />
      <MotionSection>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={14}>
            <AnimatedCard title="Inquiry Form">
              <InquiryForm />
            </AnimatedCard>
          </Col>
          <Col xs={24} lg={10}>
            <AnimatedCard title="Admissions Process" className="premium-card">
              <List
                dataSource={admissionsSteps}
                renderItem={(step, index) => <List.Item>{index + 1}. {step}</List.Item>}
              />
              <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 24 }}>
                <div>
                  <Typography.Title level={5} style={{ marginBottom: 12 }}>
                    Important Notes
                  </Typography.Title>
                  <Alert
                    type="info"
                    showIcon
                    message="A/L Science Entry"
                    description="Students applying for Biological Science or Physical Science will attend an interview and assessment before final enrollment."
                  />
                  <Alert
                    type="success"
                    showIcon
                    style={{ marginTop: 12 }}
                    message="Scholarship Opportunity"
                    description="High-performing O/L students entering A/L programs may be considered for scholarship opportunities."
                  />
                </div>
                <div>
                  <Typography.Title level={5} style={{ marginBottom: 12 }}>
                    FAQs
                  </Typography.Title>
                  <Collapse
                    items={[
                      { key: '1', label: 'When does intake begin?', children: 'Intakes are handled according to branch requirements and program availability.' },
                      { key: '2', label: 'Can parents visit the campus?', children: 'Parent visits are coordinated based on branch policies and student support needs.' },
                    ]}
                  />
                </div>
              </Space>
            </AnimatedCard>
          </Col>
        </Row>
      </MotionSection>
    </div>
  );
};
