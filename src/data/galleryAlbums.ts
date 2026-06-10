import type { GalleryAlbum } from '../types/gallery';

// TODO: Connect these gallery placeholders to verified CFTL photography when the real asset library is ready.
const albumImages = (prefix: string) =>
  Array.from({ length: 10 }, (_, i) => `https://picsum.photos/seed/${prefix}-${i + 1}/1200/900`);

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'album-001',
    title: 'Campus Life',
    description: 'A curated look at residential routines, study periods, and the day-to-day rhythm of CFTL student life.',
    slug: 'campus-life',
    coverImage: 'https://picsum.photos/seed/campus-life-cover/1200/800',
    images: albumImages('campus-life'),
  },
  {
    id: 'album-002',
    title: 'Academic Spaces',
    description: 'Focused learning spaces that support structured teaching, discussion, and exam preparation.',
    slug: 'classrooms',
    coverImage: 'https://picsum.photos/seed/classrooms-cover/1200/800',
    images: albumImages('classrooms'),
  },
  {
    id: 'album-003',
    title: 'Student Life',
    description: 'Sports, clubs, and co-curricular activity moments that complement academic growth.',
    slug: 'student-activities',
    coverImage: 'https://picsum.photos/seed/student-activities-cover/1200/800',
    images: albumImages('student-activities'),
  },
  {
    id: 'album-004',
    title: 'Events',
    description: 'Branch celebrations, festivals, and competitions that bring the wider CFTL community together.',
    slug: 'events',
    coverImage: 'https://picsum.photos/seed/events-cover/1200/800',
    images: albumImages('events'),
  },
  {
    id: 'album-005',
    title: 'Results',
    description: 'Academic milestones, achievements, and outcome-focused moments across the CFTL network.',
    slug: 'results',
    coverImage: 'https://picsum.photos/seed/results-cover/1200/800',
    images: albumImages('results'),
  },
  {
    id: 'album-006',
    title: 'Facilities',
    description: 'Residential, study, and student-support facilities that shape the CFTL learning experience.',
    slug: 'facilities',
    coverImage: 'https://picsum.photos/seed/facilities-cover/1200/800',
    images: albumImages('facilities'),
  },
];

export const getAlbumBySlug = (slug: string) => galleryAlbums.find((album) => album.slug === slug);
