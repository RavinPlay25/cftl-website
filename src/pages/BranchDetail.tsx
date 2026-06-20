import { Button, Col, Row, Space, Tag, Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { BranchGallery } from '../components/BranchGallery';
import { InfoBlock } from '../components/InfoBlock';
import { MapEmbed } from '../components/MapEmbed';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { contactDetails } from '../data/content';
import { getBranchBySlug } from '../data/branches';
import { usePageMeta } from '../hooks/usePageMeta';

export const BranchDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const branch = slug ? getBranchBySlug(slug) : undefined;

  usePageMeta(
    branch ? branch.name : 'Branch Not Found',
    'View branch details, facilities, programs, and contact information for CFTL branches.',
  );

  if (!branch) {
    return (
      <div className="page-container">
        <PageHeader title="Branch Not Found" subtitle="The branch you are looking for does not exist or may have been moved." />
        <MotionSection>
          <Link to="/branches"><Button type="primary">Back to Branches</Button></Link>
        </MotionSection>
      </div>
    );
  }

  return (
    <div className="page-container">
      <MotionSection>
        <div className="hero-section" style={{ padding: 0, overflow: 'hidden' }}>
          {branch.coverImage ? <img src={branch.coverImage} alt={branch.name} style={{ width: '100%', height: 300, objectFit: 'cover' }} /> : null}
          <div style={{ padding: 24 }}>
            <Typography.Title level={2} style={{ marginBottom: 8 }}>{branch.name}</Typography.Title>
            <Typography.Paragraph type="secondary">{branch.description}</Typography.Paragraph>
            <Space wrap>
              <Tag color="red" style={{ borderRadius: 999 }}>{branch.capacity}</Tag>
              {branch.programsAvailable.map((program) => <Tag key={program} color="red" style={{ borderRadius: 999 }}>{program}</Tag>)}
            </Space>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="page-section">
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}><InfoBlock title="Address" items={[branch.address]} /></Col>
          <Col xs={24} lg={12}><InfoBlock title="Contact" items={[...branch.phoneNumbers, branch.email, branch.openingHours]} /></Col>
          <Col xs={24} lg={12}><InfoBlock title="Capacity" items={[branch.capacity]} /></Col>
          <Col xs={24} lg={12}><InfoBlock title="Facilities" items={branch.facilities} /></Col>
          <Col xs={24} lg={12}><InfoBlock title="Branch Highlights" items={branch.branchHighlights} /></Col>
        </Row>
      </MotionSection>

      {branch.photos.length > 0 ? (
        <MotionSection className="page-section section-alt">
          <PageHeader title="Branch Photo Gallery" subtitle="Browse branch photography." />
          <BranchGallery images={branch.photos} />
        </MotionSection>
      ) : null}

      <MotionSection className="page-section">
        <PageHeader title="Location Map" subtitle="View the branch location and get directions." />
        <MapEmbed src={branch.mapEmbedUrl} title={`${branch.name} map`} />
        <Space style={{ marginTop: 16 }} wrap>
          <Button type="primary" href={branch.googleMapsUrl} target="_blank">Open in Google Maps</Button>
          <Button href={`https://wa.me/${contactDetails.whatsapp}`} target="_blank">WhatsApp Branch</Button>
        </Space>
      </MotionSection>
    </div>
  );
};
