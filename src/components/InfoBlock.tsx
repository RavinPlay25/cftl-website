import { List, Typography } from 'antd';
import { AnimatedCard } from './AnimatedCard';

interface InfoBlockProps {
  title: string;
  items: string[];
}

export const InfoBlock = ({ title, items }: InfoBlockProps) => (
  <AnimatedCard title={title}>
    <List
      dataSource={items}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text>{item}</Typography.Text>
        </List.Item>
      )}
    />
  </AnimatedCard>
);
