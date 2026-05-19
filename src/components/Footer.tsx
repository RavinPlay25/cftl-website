import { Image, Layout, Space, Typography } from 'antd';
import { contactDetails } from '../data/content';
import cftlLogo from '../assets/cftl-logo-black.jpg';

const { Footer: AntFooter } = Layout;

export const Footer = () => (
  <AntFooter className="site-footer" style={{ textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
    <Space direction="vertical" size={8}>
      <Image src={cftlLogo} alt="College of Fast Track Learning logo" preview={false} style={{ width: 240, maxWidth: '90vw' }} />
      <Typography.Text style={{ color: '#4b5563' }}>{contactDetails.address}</Typography.Text>
      <Typography.Text style={{ color: '#4b5563' }}>{contactDetails.phone} | {contactDetails.email}</Typography.Text>
      <Typography.Text style={{ color: '#6b7280' }}>© {new Date().getFullYear()} CFTL. All rights reserved.</Typography.Text>
    </Space>
  </AntFooter>
);
