import { Col, Row } from 'antd';
import { AlbumCard } from '../components/AlbumCard';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { galleryAlbums } from '../data/galleryAlbums';
import { usePageMeta } from '../hooks/usePageMeta';

export const GalleryPage = () => {
  usePageMeta('Gallery', 'Browse organized CFTL photo albums for campus life, facilities, activities, and events.');

  return (
    <div className="page-container">
      <PageHeader title="Gallery Albums" subtitle="Select an album to view organized photo collections. TODO: replace placeholder imagery with real CFTL photography when available." />
      <MotionSection>
        <Row gutter={[16, 16]}>
          {galleryAlbums.map((album) => (
            <Col xs={24} sm={12} lg={8} key={album.id}>
              <AlbumCard album={album} />
            </Col>
          ))}
        </Row>
      </MotionSection>
    </div>
  );
};
