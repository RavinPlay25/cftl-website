import { Col, Image, Row, Tag, Typography } from 'antd';
import { motion } from 'framer-motion';
import type { GalleryItem } from '../types/content';
import { fadeInUp, staggerContainer } from '../styles/motion';

export const GalleryGrid = ({ items }: { items: GalleryItem[] }) => (
  <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
    <Row gutter={[16, 16]}>
      {items.map((item) => (
        <Col xs={24} sm={12} lg={8} key={item.key}>
          <motion.div className="gallery-item" variants={fadeInUp} whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.25, ease: 'easeOut' }}>
            <Image src={item.image} alt={item.title} style={{ objectFit: 'cover' }} preview={false} />
            <Tag color="red" style={{ marginTop: 10, borderRadius: 999 }}>{item.category}</Tag>
            <div>
              <Typography.Text>{item.title}</Typography.Text>
            </div>
          </motion.div>
        </Col>
      ))}
    </Row>
  </motion.div>
);
