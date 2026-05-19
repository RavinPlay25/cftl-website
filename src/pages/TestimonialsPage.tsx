import { Col, Row } from 'antd';
import { MotionSection } from '../components/MotionSection';
import { PageHeader } from '../components/PageHeader';
import { TestimonialCard } from '../components/TestimonialCard';
import { testimonials } from '../data/content';
import { usePageMeta } from '../hooks/usePageMeta';

export const TestimonialsPage = () => {
  usePageMeta('Testimonials', 'Read CFTL parent and student reviews about the residential fast-track learning experience.');
  return (
    <div className="page-container">
      <PageHeader title="Testimonials" subtitle="Parent and student feedback from the CFTL learning journey." />
      <MotionSection>
        <Row gutter={[16, 16]}>{testimonials.map((t) => <Col xs={24} md={12} lg={8} key={t.key}><TestimonialCard testimonial={t} /></Col>)}</Row>
      </MotionSection>
    </div>
  );
};
