import { Button, Col, Row, Typography } from 'antd';
import { AnimatedCard } from '../components/AnimatedCard';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { contactDetails } from '../data/content';
import { usePageMeta } from '../hooks/usePageMeta';

export const ContactPage = () => {
  usePageMeta('Contact', 'Contact CFTL for admissions, program guidance, and branch information.');

  return (
    <div className="page-container">
      <PageHeader title="Contact Us" subtitle="Reach out for admissions guidance, program details, and branch-level support." />
      <MotionSection>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <AnimatedCard title="Contact Information">
              <Typography.Paragraph><strong>Phone:</strong> {contactDetails.phone}</Typography.Paragraph>
              <Typography.Paragraph><strong>Email:</strong> {contactDetails.email}</Typography.Paragraph>
              <Typography.Paragraph><strong>Address:</strong> {contactDetails.address}</Typography.Paragraph>
              <Button type="primary" href="https://facebook.com" target="_blank">Social Link Placeholder</Button>
            </AnimatedCard>
          </Col>
          <Col xs={24} lg={12}>
            <AnimatedCard title="Map Placeholder">
              <div style={{ minHeight: 260, display: 'grid', placeItems: 'center', color: '#6b7280' }}>
                Embedded map placeholder for future Google Maps integration.
              </div>
            </AnimatedCard>
          </Col>
        </Row>
      </MotionSection>
    </div>
  );
};
