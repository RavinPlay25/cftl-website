import { Col, Row } from 'antd';
import { FeatureCard } from '../components/FeatureCard';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { usePageMeta } from '../hooks/usePageMeta';

const facilities = [
  {
    title: 'Residential Accommodation',
    description:
      'Comfortable residential spaces are maintained to support disciplined routines, student welfare, and a stable learning rhythm.',
  },
  {
    title: 'Study Halls',
    description:
      'Dedicated study halls provide quiet, supervised environments for focused learning, revision, and independent practice.',
  },
  {
    title: 'Academic Supervision',
    description:
      'Continuous academic supervision helps students stay organized, accountable, and consistent in their daily progress.',
  },
  {
    title: 'Assistant Lecturers',
    description:
      'Assistant lecturers provide close academic support, clarify subject matter, and help students keep pace with the program plan.',
  },
  {
    title: 'Security Officers',
    description:
      'Security personnel help maintain a safe residential atmosphere that supports calm and confidence for students and families.',
  },
  {
    title: 'CCTV Monitoring',
    description:
      'Monitoring systems contribute to an orderly campus environment and reinforce the standards of the residential model.',
  },
  {
    title: 'Dining Facilities',
    description:
      'Dining arrangements are managed with student wellbeing in mind, supporting the daily rhythm of residential life.',
  },
  {
    title: 'Medical Support',
    description:
      'Basic medical support is coordinated to help address routine health needs with care and timely attention.',
  },
  {
    title: 'Sports Facilities',
    description:
      'Sports spaces contribute to balanced student development through activity, teamwork, and healthy recreation.',
  },
  {
    title: 'Learning Materials',
    description:
      'Students are supported with the learning materials required for guided revision, practice, and exam readiness.',
  },
];

export const FacilitiesPage = () => {
  usePageMeta('Facilities', 'See CFTL residential facilities including accommodation, study halls, supervision, security, dining, and student support.');

  return (
    <div className="page-container">
      <PageHeader title="Facilities" subtitle="A complete residential ecosystem that supports academic focus, discipline, and wellbeing." />
      <MotionSection>
        <Row gutter={[16, 16]}>
          {facilities.map((item) => (
            <Col xs={24} sm={12} lg={8} key={item.title}>
              <FeatureCard title={item.title} description={item.description} />
            </Col>
          ))}
        </Row>
      </MotionSection>
    </div>
  );
};
