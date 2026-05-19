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
import { galleryAlbums } from '../data/galleryAlbums';
import { branches } from '../data/branches';
import { programs, stats, testimonials } from '../data/content';
import { usePageMeta } from '../hooks/usePageMeta';

export const HomePage = () => {
  usePageMeta('Home', 'College of Fast Track Learning offers trusted residential O/L and A/L fast-track education in Sri Lanka.');

  return (
    <div className="page-container">
      <HeroSection />

      <MotionSection className="page-section">
        <SectionTitle title="Why Choose CFTL" subtitle="A credibility-first residential learning system with discipline, supervision, and focused academic acceleration." />
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}><FeatureCard title="Structured Study Routines" description="Students follow a disciplined daily timetable designed for consistent progress and effective time use." /></Col>
          <Col xs={24} md={8}><FeatureCard title="24/7 Residential Supervision" description="A parent-friendly supervised residential environment that prioritizes safety and wellbeing." /></Col>
          <Col xs={24} md={8}><FeatureCard title="Parent Progress Updates" description="Transparent communication gives parents confidence in student academic and personal development." /></Col>
        </Row>
      </MotionSection>

      <MotionSection className="page-section">
        <SectionTitle title="Programs Overview" />
        <Row gutter={[16, 16]}>{programs.map((program) => <Col xs={24} lg={12} key={program.key}><ProgramCard program={program} /></Col>)}</Row>
      </MotionSection>

      <MotionSection className="page-section section-alt">
        <SectionTitle title="Facilities Highlights" />
        <Carousel autoplay>
          {['Residential accommodation', 'Monitored study halls', 'Safe and supervised campus'].map((slide) => (
            <div key={slide}>
              <Card className="premium-card" style={{ minHeight: 150 }}>
                <Typography.Title level={4}>{slide}</Typography.Title>
                <Typography.Paragraph type="secondary">Purpose-built spaces support discipline, concentration, and student welfare.</Typography.Paragraph>
              </Card>
            </div>
          ))}
        </Carousel>
      </MotionSection>

      <MotionSection className="page-section">
        <SectionTitle title="Our Branches" subtitle="Explore CFTL branches and find the nearest residential learning environment for your child." />
        <Row gutter={[16, 16]}>
          {branches.map((branch) => (
            <Col xs={24} md={12} key={branch.id}><BranchCard branch={branch} /></Col>
          ))}
        </Row>
      </MotionSection>

      <MotionSection className="page-section">
        <SectionTitle title="Achievements and Statistics" />
        <Row gutter={[16, 16]}>{stats.map((item) => <Col xs={12} md={6} key={item.title}><StatCard title={item.title} value={item.value} suffix={item.suffix} /></Col>)}</Row>
      </MotionSection>

      <MotionSection className="page-section">
        <SectionTitle title="Testimonials" />
        <Row gutter={[16, 16]}>{testimonials.map((t) => <Col xs={24} md={8} key={t.key}><TestimonialCard testimonial={t} /></Col>)}</Row>
      </MotionSection>

      <MotionSection className="page-section section-alt">
        <SectionTitle title="Gallery Albums" subtitle="Browse organized photo albums. You can add or replace album photos later from data files." />
        <Row gutter={[16, 16]}>
          {galleryAlbums.slice(0, 3).map((album) => (
            <Col xs={24} md={8} key={album.id}><AlbumCard album={album} /></Col>
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
