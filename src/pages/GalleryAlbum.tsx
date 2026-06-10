import { Button } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { ImageGrid } from '../components/ImageGrid';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { getAlbumBySlug } from '../data/galleryAlbums';
import { usePageMeta } from '../hooks/usePageMeta';

export const GalleryAlbumPage = () => {
  const { albumSlug } = useParams<{ albumSlug: string }>();
  const album = albumSlug ? getAlbumBySlug(albumSlug) : undefined;

  usePageMeta(album ? `${album.title} Album` : 'Album Not Found', 'Browse organized CFTL album images.');

  if (!album) {
    return (
      <div className="page-container">
        <PageHeader title="Album Not Found" subtitle="The album you are looking for is not available." />
        <MotionSection>
          <Link to="/gallery"><Button type="primary">Back to Gallery</Button></Link>
        </MotionSection>
      </div>
    );
  }

  return (
    <div className="page-container">
      <PageHeader title={album.title} subtitle={`${album.description} TODO: Replace placeholder images with verified CFTL photography.`} />
      <MotionSection>
        <ImageGrid images={album.images} />
      </MotionSection>
    </div>
  );
};
