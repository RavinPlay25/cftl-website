import { Button, Image, Layout, Space, Typography } from 'antd';
import { FacebookFilled, YoutubeFilled } from '@ant-design/icons';
import { contactDetails } from '../data/content';
import cftlLogo from '../assets/cftl-logo.jpg';

const { Footer: AntFooter } = Layout;
const facebookBlue = '#1877F2';
const whatsappGreen = '#25D366';

export const Footer = () => (
  <AntFooter className="site-footer" style={{ textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
    <Space direction="vertical" size={12}>
      <div className="footer-logo-wrap">
        <Image src={cftlLogo} alt="College of Fast Track Learning logo" preview={false} style={{ width: 240, maxWidth: '90vw' }} />
      </div>
      <Typography.Text style={{ color: '#d1d5db' }}>{contactDetails.address}</Typography.Text>
      <Typography.Text style={{ color: '#d1d5db' }}>{contactDetails.phone} | {contactDetails.email}</Typography.Text>
      <Space wrap size="small" className="footer-social-links">
        <Button type="primary" icon={<FacebookFilled />} href={contactDetails.facebook} target="_blank" style={{ backgroundColor: facebookBlue, borderColor: facebookBlue }}>
          Facebook
        </Button>
        <Button type="primary" href={`https://wa.me/${contactDetails.whatsapp}`} target="_blank" style={{ backgroundColor: whatsappGreen, borderColor: whatsappGreen }}>
          WhatsApp
        </Button>
        <Button type="default" icon={<YoutubeFilled />} href={contactDetails.youtube} target="_blank">
          YouTube
        </Button>
      </Space>
      <Typography.Text style={{ color: '#9ca3af' }}>Copyright {new Date().getFullYear()} College of Fast Track Learning. All rights reserved.</Typography.Text>
    </Space>
  </AntFooter>
);
