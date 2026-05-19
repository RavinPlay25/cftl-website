import { Col, Row } from 'antd';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../styles/motion';

export const ImageGrid = ({ images }: { images: string[] }) => (
  <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
    <Row gutter={[16, 16]}>
      {images.map((image, index) => (
        <Col xs={24} sm={12} lg={8} key={`${image}-${index}`}>
          <motion.div variants={fadeInUp} whileHover={{ y: -3, scale: 1.02 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
            <img src={image} alt={`Gallery item ${index + 1}`} style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 12, border: '1px solid #eceef2' }} />
          </motion.div>
        </Col>
      ))}
    </Row>
  </motion.div>
);
