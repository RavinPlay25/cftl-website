import type { Branch } from '../types/branch';

const placeholderMapEmbed = 'https://www.google.com/maps?q=Colombo,+Sri+Lanka&output=embed';
const placeholderMapsLink = 'https://maps.google.com/?q=Colombo,+Sri+Lanka';

const branchPlaceholderPhotos = (prefix: string) =>
  Array.from({ length: 8 }, (_, i) => `https://picsum.photos/seed/${prefix}-${i + 1}/1200/800`);

export const branches: Branch[] = [
  {
    id: 'branch-001',
    slug: 'battaramulla',
    name: 'CFTL Battaramulla Branch',
    shortName: 'Battaramulla Branch',
    description: 'A focused residential learning center with close supervision and structured study support for O/L and A/L students.',
    address: 'Placeholder Address, Battaramulla, Sri Lanka',
    phoneNumbers: ['+94 11 000 1111', '+94 71 699 0088'],
    email: 'battaramulla@cftl.lk',
    openingHours: 'Monday to Sunday: 7:00 AM - 8:00 PM',
    mapEmbedUrl: placeholderMapEmbed,
    googleMapsUrl: placeholderMapsLink,
    coverImage: 'https://picsum.photos/seed/battaramulla-cover/1500/800',
    photos: branchPlaceholderPhotos('battaramulla'),
    facilities: ['Residential accommodation', 'Monitored study halls', 'Supervised self-study sessions', 'Dining and wellness support'],
    programsAvailable: ['O/L Residential Fast Track', 'A/L Residential Fast Track'],
    branchHighlights: ['Dedicated branch-level student counselors', 'Structured revision timetable', 'Regular parent communication updates'],
  },
  {
    id: 'branch-002',
    slug: 'boralesgamuwa',
    name: 'CFTL Boralesgamuwa Branch',
    shortName: 'Boralesgamuwa Branch',
    description: 'A parent-friendly residential academic environment designed for disciplined routines and consistent exam-focused progress.',
    address: 'Placeholder Address, Boralesgamuwa, Sri Lanka',
    phoneNumbers: ['+94 11 000 2222', '+94 76 123 4567'],
    email: 'boralesgamuwa@cftl.lk',
    openingHours: 'Monday to Sunday: 7:00 AM - 8:00 PM',
    mapEmbedUrl: placeholderMapEmbed,
    googleMapsUrl: placeholderMapsLink,
    coverImage: 'https://picsum.photos/seed/boralesgamuwa-cover/1500/800',
    photos: branchPlaceholderPhotos('boralesgamuwa'),
    facilities: ['Secure residential supervision', 'Modern classrooms', 'Quiet study zones', 'Academic mentoring support'],
    programsAvailable: ['O/L Residential Fast Track', 'A/L Residential Fast Track'],
    branchHighlights: ['Small group attention', 'Weekly progress review cycles', 'Goal tracking for each student'],
  },
];

export const getBranchBySlug = (slug: string) => branches.find((branch) => branch.slug === slug);
