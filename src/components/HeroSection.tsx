import { Button, Col, Row, Space, Typography } from 'antd';
import { MessageOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroContent, contactDetails } from '../data/content';
import cftlLogo from '../assets/cftl-logo.jpg';
import { fadeIn, fadeInUp, staggerContainer } from '../styles/motion';

export const HeroSection = () => (
  <motion.div
    className="hero-section"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
  >
    <Row gutter={[24, 24]} align="middle">
      <Col xs={24} lg={14}>
        <motion.div variants={fadeInUp}>
          <Typography.Title level={1} className="hero-heading">
            {heroContent.title}
          </Typography.Title>
          <Typography.Paragraph className="hero-text">{heroContent.subtitle}</Typography.Paragraph>
        </motion.div>
        <motion.div variants={fadeIn}>
          <Space wrap>
            <Link to="/admissions">
              <Button type="primary" size="large">{heroContent.primaryCta}</Button>
            </Link>
            <Button icon={<MessageOutlined />} size="large" href={`https://wa.me/${contactDetails.whatsapp}`} target="_blank">
              {heroContent.secondaryCta}
            </Button>
          </Space>
        </motion.div>
      </Col>
      <Col xs={24} lg={10}>
        <motion.div variants={fadeInUp} className="hero-right-card">
          <img src={cftlLogo} alt="College of Fast Track Learning" />
          <Space style={{ marginTop: 12 }}>
            <SafetyCertificateOutlined style={{ color: '#E60023' }} />
            <Typography.Text type="secondary">Residential supervision, safety, and structured academic routines</Typography.Text>
          </Space>
        </motion.div>
      </Col>
    </Row>
  </motion.div>
);
