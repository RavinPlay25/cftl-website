import { Button, Col, Row, Space, Typography } from 'antd';
import { FacebookFilled, YoutubeFilled } from '@ant-design/icons';
import { AnimatedCard } from '../components/AnimatedCard';
import { MapEmbed } from '../components/MapEmbed';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { branches } from '../data/branches';
import { contactDetails } from '../data/content';
import { usePageMeta } from '../hooks/usePageMeta';

const headOfficeBranch = branches.find((branch) => branch.slug === 'pelawatta') ?? branches[0];
const facebookBlue = '#1877F2';
const whatsappGreen = '#25D366';

export const ContactPage = () => {
  usePageMeta('Contact', 'Contact CFTL for admissions, program guidance, branch information, and official social channels.');

  return (
    <div className="page-container">
      <PageHeader title="Contact Us" subtitle="Reach out for admissions guidance, program details, and branch-level support." />
      <MotionSection>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <AnimatedCard title="Contact Information">
              <Typography.Paragraph><strong>Hotline:</strong> {contactDetails.phone}</Typography.Paragraph>
              <Typography.Paragraph><strong>WhatsApp:</strong> {contactDetails.phone}</Typography.Paragraph>
              <Typography.Paragraph><strong>Email:</strong> {contactDetails.email}</Typography.Paragraph>
              <Typography.Paragraph><strong>Address:</strong> {contactDetails.address}</Typography.Paragraph>
              <Space wrap>
                <Button type="primary" href={contactDetails.facebook} target="_blank" icon={<FacebookFilled />} style={{ backgroundColor: facebookBlue, borderColor: facebookBlue }}>
                  Facebook
                </Button>
                <Button type="primary" href={`https://wa.me/${contactDetails.whatsapp}`} target="_blank" style={{ backgroundColor: whatsappGreen, borderColor: whatsappGreen }}>
                  WhatsApp
                </Button>
                <Button href={contactDetails.youtube} target="_blank" icon={<YoutubeFilled />}>
                  YouTube
                </Button>
              </Space>
            </AnimatedCard>
          </Col>
          <Col xs={24} lg={12}>
            <AnimatedCard title="Head Office Location">
              <MapEmbed src={headOfficeBranch.mapEmbedUrl} title="CFTL head office map" />
              <Button style={{ marginTop: 16 }} type="primary" href={headOfficeBranch.googleMapsUrl} target="_blank">
                Open Head Office in Google Maps
              </Button>
            </AnimatedCard>
          </Col>
        </Row>
      </MotionSection>
    </div>
  );
};
