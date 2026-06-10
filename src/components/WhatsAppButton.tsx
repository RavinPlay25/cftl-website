import { FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import { contactDetails } from '../data/content';

export const WhatsAppButton = () => (
  <FloatButton
    icon={<WhatsAppOutlined />}
    tooltip="WhatsApp Us"
    href={`https://wa.me/${contactDetails.whatsapp}`}
    target="_blank"
    style={{ insetInlineEnd: 24, insetBlockEnd: 92, backgroundColor: '#25D366', color: '#ffffff' }}
  />
);

