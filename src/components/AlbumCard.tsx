import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import type { GalleryAlbum } from '../types/gallery';
import { AnimatedCard } from './AnimatedCard';

export const AlbumCard = ({ album }: { album: GalleryAlbum }) => (
  <AnimatedCard>
    <img src={album.coverImage} alt={album.title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginBottom: 12 }} />
    <Typography.Title level={4} style={{ marginBottom: 8 }}>{album.title}</Typography.Title>
    <Typography.Paragraph type="secondary">{album.description}</Typography.Paragraph>
    <Link to={`/gallery/${album.slug}`}>
      <Button type="primary">View Album</Button>
    </Link>
  </AnimatedCard>
);
