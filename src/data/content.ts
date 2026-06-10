import type { CoreAdvantage, Program, Testimonial } from '../types/content';

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
  title: 'Accelerated Learning for a Fast-Changing World',
  subtitle:
    'College of Fast Track Learning provides a unique fully residential educational experience designed to help students achieve academic excellence through structured learning, continuous academic guidance, and a supportive environment.',
  primaryCta: 'Send Inquiry',
  secondaryCta: 'WhatsApp Us',
};

export const coreAdvantages: CoreAdvantage[] = [
  {
    title: '100% Residential Education',
    description: 'Students learn within a fully residential academic environment built for focus, discipline, and consistency.',
  },
  {
    title: 'Continuous Academic Guidance',
    description: 'Structured supervision, mentoring, and regular academic follow-up help students stay on track throughout the term.',
  },
  {
    title: 'Dedicated Staff and Management',
    description: 'Experienced staff members and branch management work together to maintain academic standards and student welfare.',
  },
  {
    title: 'Structured Study Environment',
    description: 'Daily routines, supervised study periods, and purpose-built learning spaces create the rhythm needed for accelerated progress.',
  },
  {
    title: 'Career and University Guidance',
    description: 'Students receive support with subject direction, academic planning, and university pathway preparation.',
  },
  {
    title: 'Student-Centered Academic Support',
    description: 'Every learner is guided with a student-first approach that responds to academic needs, confidence, and progress.',
  },
];

export const programs: Program[] = [
  {
    key: 'secondary-education',
    title: 'Secondary Education Program',
    summary:
      'A structured residential education program designed to support students during their formative academic years through supervised study, extracurricular activities, leadership development, and character building.',
    duration: 'Grades 6-11',
    highlights: ['Residential academic support', 'Supervised study routines', 'Leadership and character development'],
  },
  {
    key: 'ol-fast-track',
    title: 'O/L Residential Fast Track Program',
    summary:
      'An intensive residential program for G.C.E. O/L students that combines supervised learning, subject-focused preparation, and disciplined study routines.',
    duration: 'Grades 10 and 11 | 8 Months or 1 Year',
    highlights: ['Sinhala Medium', 'English Medium', 'All General Subjects', 'Commerce', 'ICT', 'Aesthetic Subjects', 'Civics', 'Health Science', 'Residential Assistant Lecturers', 'Experienced Lecture Panel', 'Local Syllabus Preparation'],
  },
  {
    key: 'al-fast-track',
    title: 'A/L Residential Fast Track Program',
    summary:
      'An advanced residential A/L preparation pathway focused on academic mentoring, university readiness, and guided subject mastery.',
    duration: '8-18 Months',
    highlights: ['Biological Science', 'Physical Science', 'Commerce', 'Technology', 'Arts', 'Career Guidance', 'University Guidance', 'Residential Learning', 'Academic Mentoring'],
  },
  {
    key: 'exam-prep',
    title: '60-Day Residential Examination Preparation Program',
    summary:
      'An intensive paper practice and discussion program designed for students preparing for GCE O/L and GCE A/L examinations.',
    duration: '60 Days',
    highlights: ['Paper practice sessions', 'Focused discussion classes', 'Exam technique support', 'Residential learning intensity'],
  },
];

export const testimonials: Testimonial[] = [
  {
    key: '1',
    name: 'Placeholder Parent Testimonial 1',
    role: 'Placeholder',
    quote: 'Placeholder testimonial content will be replaced with verified parent feedback once real testimonials are provided.',
  },
  {
    key: '2',
    name: 'Placeholder Student Testimonial 2',
    role: 'Placeholder',
    quote: 'Placeholder testimonial content will be replaced with verified student feedback once real testimonials are provided.',
  },
  {
    key: '3',
    name: 'Placeholder Parent Testimonial 3',
    role: 'Placeholder',
    quote: 'Placeholder testimonial content will be replaced with verified family feedback once real testimonials are provided.',
  },
];

export const stats = [
  { title: 'Operating Since', value: 2008, suffix: '' },
  { title: 'Branches', value: 7, suffix: '' },
  { title: 'Students Educated', value: 10000, suffix: '+' },
  { title: 'Pass Rate', value: 99, suffix: '%' },
  { title: 'University Selection Rate', value: '20-30', suffix: '%' },
];

export const contactDetails = {
  phone: '0716 99 00 88',
  whatsapp: '94716990088',
  email: 'collegeoffasttracklearning@gmail.com',
  facebook: 'https://www.facebook.com/share/1EGfDXu6LZ/',
  youtube: 'https://www.youtube.com/@cftleducations',
  address: 'CFTL Head Office, Pelawatta, Sri Lanka',
  schoolName: 'College of Fast Track Learning (CFTL)',
};

export const admissionsSteps = [
  'Students may register by completing admission payments according to the intake requirements.',
  'For Biological Science and Physical Science streams, students are required to attend an interview and assessment before enrollment.',
  'Scholarship opportunities are available for high-performing O/L students entering A/L programs.',
  'Once admission is confirmed, the student is placed into the appropriate residential academic program and onboarding process begins.',
];
