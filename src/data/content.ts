import type { Program, Testimonial } from '../types/content';

export const navItems = [
  { key: '/', label: 'Home' },
  { key: '/about', label: 'About' },
  { key: '/programs', label: 'Programs' },
  { key: '/facilities', label: 'Facilities' },
  { key: '/results', label: 'Results' },
  { key: '/branches', label: 'Branches' },
  { key: '/gallery', label: 'Gallery' },
  { key: '/testimonials', label: 'Testimonials' },
  { key: '/admissions', label: 'Admissions' },
  { key: '/contact', label: 'Contact' },
];

export const heroContent = {
  title: 'College of Fast Track Learning (CFTL)',
  subtitle:
    "Sri Lanka's First and Largest Residential School Network, helping students achieve focused academic success since 2008.",
  primaryCta: 'Send Inquiry',
  secondaryCta: 'WhatsApp Us',
};

export const programs: Program[] = [
  {
    key: 'ol',
    title: 'O/L Residential Fast Track',
    summary: 'A structured residential pathway for G.C.E. O/L students to improve performance with guided learning and discipline.',
    duration: '6-12 Month Fast Track',
    highlights: ['Daily supervised study blocks', 'Targeted subject clinics', 'Frequent progress reporting to parents'],
  },
  {
    key: 'al',
    title: 'A/L Residential Fast Track',
    summary: 'An intensive residential A/L preparation program with focused exam strategy, subject mastery, and close supervision.',
    duration: '9-15 Month Fast Track',
    highlights: ['Exam-focused revision cycles', 'Mentor-led accountability', 'Structured routine for maximum productivity'],
  },
];

export const testimonials: Testimonial[] = [
  {
    key: '1',
    name: 'Kumari Perera',
    role: 'Parent',
    quote: 'CFTL gave our son the structure and confidence he needed. We saw discipline, improvement, and peace of mind.',
  },
  {
    key: '2',
    name: 'Nethmi Jayasinghe',
    role: 'A/L Student',
    quote: 'The residential environment kept me focused. Teachers and supervisors supported me every day.',
  },
  {
    key: '3',
    name: 'Ravindu Fernando',
    role: 'O/L Student',
    quote: 'Study halls and scheduled sessions helped me use my time better and improve my results quickly.',
  },
];

export const stats = [
  { title: 'Founded', value: 2008, suffix: '' },
  { title: 'Residential Branches', value: 12, suffix: '+' },
  { title: 'Students Guided', value: 15000, suffix: '+' },
  { title: 'Parent Satisfaction', value: 95, suffix: '%' },
];

export const contactDetails = {
  phone: '+94 11 000 0000',
  email: 'info@cftl.lk',
  address: 'CFTL Head Office, Colombo, Sri Lanka',
  whatsapp: '94716990088',
};

export const admissionsSteps = [
  'Submit your inquiry with student details and preferred program.',
  'Receive a call from CFTL admissions for guidance and branch matching.',
  'Attend counseling and program orientation.',
  'Complete registration and begin the residential learning journey.',
];
