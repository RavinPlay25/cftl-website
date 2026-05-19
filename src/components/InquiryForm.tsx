import { Button, Form, Input, message, Select } from 'antd';

interface InquiryData {
  name: string;
  role: 'Parent' | 'Student';
  phone: string;
  email?: string;
  program: 'O/L Residential Fast Track' | 'A/L Residential Fast Track';
  message: string;
}

export const InquiryForm = () => {
  const [form] = Form.useForm<InquiryData>();

  const onFinish = () => {
    message.success('Thank you. Your inquiry has been submitted successfully.');
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
        <Input placeholder="Your full name" />
      </Form.Item>
      <Form.Item label="Parent/Student" name="role" rules={[{ required: true, message: 'Please select one option' }]}>
        <Select options={[{ value: 'Parent', label: 'Parent' }, { value: 'Student', label: 'Student' }]} />
      </Form.Item>
      <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: 'Please enter phone number' }]}>
        <Input placeholder="e.g. +94 77 123 4567" />
      </Form.Item>
      <Form.Item label="Email (Optional)" name="email" rules={[{ type: 'email', message: 'Please enter a valid email' }]}>
        <Input placeholder="you@example.com" />
      </Form.Item>
      <Form.Item label="Interested Program" name="program" rules={[{ required: true, message: 'Please select a program' }]}>
        <Select options={[{ value: 'O/L Residential Fast Track', label: 'O/L Residential Fast Track' }, { value: 'A/L Residential Fast Track', label: 'A/L Residential Fast Track' }]} />
      </Form.Item>
      <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
        <Input.TextArea rows={4} placeholder="Tell us about your requirement" />
      </Form.Item>
      <Button htmlType="submit" type="primary" size="large">Send Inquiry</Button>
    </Form>
  );
};
