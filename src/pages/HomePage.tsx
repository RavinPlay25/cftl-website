import { Card, Carousel, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { SectionTitle } from '../components/SectionTitle';
import { ProgramCard } from '../components/ProgramCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { CTASection } from '../components/CTASection';
import { StatCard } from '../components/StatCard';
import { FeatureCard } from '../components/FeatureCard';
import { MotionSection } from '../components/MotionSection';
import { AlbumCard } from '../components/AlbumCard';
import { BranchCard } from '../components/BranchCard';
import { branches } from '../data/branches';
import { coreAdvantages, programs, stats, testimonials } from '../data/content';
import { galleryAlbums } from '../data/galleryAlbums';
import { usePageMeta } from '../hooks/usePageMeta';

const studentLifeItems = [
  {
    title: 'Sports Fiesta',
    description: 'A vibrant annual celebration of teamwork, energy, and healthy competition across the CFTL community.',
  },
  {
    title: 'Inter-Branch Sports Competitions',
    description: 'Branch teams meet in organized competitions that build school spirit, discipline, and collaboration.',
  },
  {
    title: 'Annual Sports Meet',
    description: 'A flagship event that highlights physical development, endurance, and shared achievement across branches.',
  },
  {
    title: 'Sinhala & Hindu New Year Festival',
    description: 'A cultural celebration that strengthens community bonds while honoring important national traditions.',
  },
];

export const HomePage = () => {
  usePageMeta(
    'Home',
    'College of Fast Track Learning (CFTL) offers fully residential accelerated education, branch-based academic support, and official admissions guidance in Sri Lanka.',
  );

  return (
    <div className="page-container">
      <HeroSection />

      <MotionSection className="page-section">
        <SectionTitle
          title="Why Choose CFTL"
          subtitle="The CFTL model combines residential discipline, academic guidance, and structured student care across every branch."
        />
        <Row gutter={[16, 16]}>
          {coreAdvantages.map((advantage) => (
            <Col xs={24} md={12} lg={8} key={advantage.title}>
              <FeatureCard title={advantage.title} description={advantage.description} />
            </Col>
          ))}
        </Row>
      </MotionSection>

      <MotionSection className="page-section">
        <SectionTitle title="Programs Overview" />
        <Row gutter={[16, 16]}>
          {programs.map((program) => (
            <Col xs={24} lg={12} key={program.key}>
              <ProgramCard program={program} />
            </Col>
          ))}
        </Row>
      </MotionSection>

      <MotionSection className="page-section section-alt">
        <SectionTitle title="Facilities Highlights" subtitle="A residential academic setting designed to support learning, safety, and student wellbeing." />
        <Carousel autoplay>
          {[
            {
              title: 'Residential Accommodation',
              description: 'Living spaces are managed to support disciplined routines, comfort, and student welfare.',
            },
            {
              title: 'Study Halls',
              description: 'Dedicated study environments encourage focus, quiet concentration, and guided self-study.',
            },
            {
              title: 'Academic Supervision',
              description: 'Continuous supervision helps students maintain rhythm, accountability, and progress.',
            },
            {
              title: 'Learning Materials',
              description: 'Students are supported with the materials and practice environment needed for exam readiness.',
            },
          ].map((slide) => (
            <div key={slide.title}>
              <Card className="premium-card" style={{ minHeight: 150 }}>
                <Typography.Title level={4}>{slide.title}</Typography.Title>
                <Typography.Paragraph type="secondary">{slide.description}</Typography.Paragraph>
              </Card>
            </div>
          ))}
        </Carousel>
      </MotionSection>

      <MotionSection className="page-section">
        <SectionTitle
          title="Student Life"
          subtitle="Co-curricular experiences help students stay balanced, confident, and connected to the wider CFTL community."
        />
        <Row gutter={[16, 16]}>
          {studentLifeItems.map((item) => (
            <Col xs={24} md={12} key={item.title}>
              <FeatureCard title={item.title} description={item.description} />
            </Col>
          ))}
        </Row>
      </MotionSection>

      <MotionSection className="page-section">
        <SectionTitle title="Our Branches" subtitle="Explore CFTL branches and find the nearest residential learning environment for your child." />
        <Row gutter={[16, 16]}>
          {branches.map((branch) => (
            <Col xs={24} md={12} key={branch.id}>
              <BranchCard branch={branch} />
            </Col>
          ))}
        </Row>
      </MotionSection>

      <MotionSection className="page-section">
        <SectionTitle title="Achievements and Statistics" />
        <Row gutter={[16, 16]}>
          {stats.map((item) => (
            <Col xs={12} md={6} key={item.title}>
              <StatCard title={item.title} value={item.value} suffix={item.suffix} />
            </Col>
          ))}
        </Row>
      </MotionSection>

      <MotionSection className="page-section">
        <SectionTitle title="Testimonials" subtitle="Placeholder testimonial content remains in place until verified parent and student feedback is supplied." />
        <Row gutter={[16, 16]}>
          {testimonials.map((t) => (
            <Col xs={24} md={8} key={t.key}>
              <TestimonialCard testimonial={t} />
            </Col>
          ))}
        </Row>
      </MotionSection>

      <MotionSection className="page-section section-alt">
        <SectionTitle
          title="Gallery Albums"
          subtitle="Gallery imagery is currently placeholder content and will be connected to real CFTL photography later."
        />
        <Row gutter={[16, 16]}>
          {galleryAlbums.slice(0, 3).map((album) => (
            <Col xs={24} md={8} key={album.id}>
              <AlbumCard album={album} />
            </Col>
          ))}
        </Row>
      </MotionSection>

      <div className="page-section">
        <CTASection
          title="Ready to Begin?"
          description="Send an inquiry and our admissions team will guide you to the right fast-track residential program."
          buttonLabel="Go to Admissions"
          to="/admissions"
        />
      </div>

      <MotionSection className="page-section" delay={0.05}>
        <Typography.Paragraph style={{ textAlign: 'center', color: '#6b7280' }}>
          Learn more on the <Link to="/about">About</Link>, <Link to="/results">Results</Link>, and <Link to="/branches">Branches</Link> pages.
        </Typography.Paragraph>
      </MotionSection>
    </div>
  );
};
