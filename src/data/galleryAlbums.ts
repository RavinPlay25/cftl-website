import type { GalleryAlbum } from '../types/gallery';

const albumImages = (prefix: string) =>
  Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/${prefix}-${i + 1}/1200/900`);

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'album-001',
    title: 'Campus Life',
    description: 'Daily residential life and study atmosphere at CFTL campuses.',
    slug: 'campus-life',
    coverImage: 'https://picsum.photos/seed/campus-life-cover/1200/800',
    images: albumImages('campus-life'),
  },
  {
    id: 'album-002',
    title: 'Classrooms',
    description: 'Learning spaces designed for focused academic preparation.',
    slug: 'classrooms',
    coverImage: 'https://picsum.photos/seed/classrooms-cover/1200/800',
    images: albumImages('classrooms'),
  },
  {
    id: 'album-003',
    title: 'Student Activities',
    description: 'Balanced student life through guided co-curricular activities.',
    slug: 'student-activities',
    coverImage: 'https://picsum.photos/seed/student-activities-cover/1200/800',
    images: albumImages('student-activities'),
  },
  {
    id: 'album-004',
    title: 'Events',
    description: 'Branch and network-level events across the CFTL community.',
    slug: 'events',
    coverImage: 'https://picsum.photos/seed/events-cover/1200/800',
    images: albumImages('events'),
  },
  {
    id: 'album-005',
    title: 'Results',
    description: 'Moments celebrating academic achievements and milestones.',
    slug: 'results',
    coverImage: 'https://picsum.photos/seed/results-cover/1200/800',
    images: albumImages('results'),
  },
  {
    id: 'album-006',
    title: 'Facilities',
    description: 'Residential and study facilities that support student success.',
    slug: 'facilities',
    coverImage: 'https://picsum.photos/seed/facilities-cover/1200/800',
    images: albumImages('facilities'),
  },
];

export const getAlbumBySlug = (slug: string) => galleryAlbums.find((album) => album.slug === slug);
