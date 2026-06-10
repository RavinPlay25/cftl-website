import { Alert, Button, Col, Form, Input, Row, Select, Space, message } from 'antd';
import { useState } from 'react';
import { submitInquiry } from '../services/inquiryService';

type InquiryStatus = 'idle' | 'error';

interface InquiryFormValues {
  studentName: string;
  parentGuardianName: string;
  phoneNumber: string;
  programInterestedIn: string;
  preferredBranch: string;
  whatsappNumber?: string;
  emailAddress?: string;
  district?: string;
  message?: string;
}

const programOptions = [
  'Secondary Education Program (Grades 6-11)',
  'O/L Residential Fast Track Program',
  'A/L Residential Fast Track Program',
  '60-Day Residential Examination Preparation Program',
].map((value) => ({ value, label: value }));

const branchOptions = [
  'Pelawatta',
  'Bandaragama',
  'Dodangoda',
  'Kalutara North',
  'Kalutara',
  'Kelaniya',
  'Galle',
].map((value) => ({ value, label: value }));

export const InquiryForm = () => {
  const [form] = Form.useForm<InquiryFormValues>();
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<InquiryStatus>('idle');

  const onFinish = async (values: InquiryFormValues) => {
    setSubmitting(true);
    setStatus('idle');

    try {
      await submitInquiry({
        studentName: values.studentName,
        parentName: values.parentGuardianName,
        phoneNumber: values.phoneNumber,
        whatsappNumber: values.whatsappNumber,
        email: values.emailAddress,
        district: values.district,
        program: values.programInterestedIn,
        preferredBranch: values.preferredBranch,
        message: values.message,
      });
      form.resetFields();
      message.success('Thank you for your inquiry. Our admissions team will contact you shortly.');
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      {status === 'error' ? (
        <Alert
          type="error"
          showIcon
          message="Unable to submit inquiry. Please try again or contact us directly."
        />
      ) : null}

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Student Name"
              name="studentName"
              rules={[{ required: true, message: 'Please enter the student name' }]}
            >
              <Input placeholder="Student full name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Parent / Guardian Name"
              name="parentGuardianName"
              rules={[{ required: true, message: 'Please enter the parent or guardian name' }]}
            >
              <Input placeholder="Parent or guardian full name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[{ required: true, message: 'Please enter the phone number' }]}
            >
              <Input placeholder="e.g. +94 77 123 4567" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Program Interested In"
              name="programInterestedIn"
              rules={[{ required: true, message: 'Please select a program' }]}
            >
              <Select options={programOptions} placeholder="Select a program" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Preferred Branch"
              name="preferredBranch"
              rules={[{ required: true, message: 'Please select a branch' }]}
            >
              <Select options={branchOptions} placeholder="Select a branch" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="WhatsApp Number" name="whatsappNumber">
              <Input placeholder="Optional WhatsApp number" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Email Address"
              name="emailAddress"
              rules={[{ type: 'email', message: 'Please enter a valid email address' }]}
            >
              <Input placeholder="Optional email address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="District" name="district">
              <Input placeholder="Optional district" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item label="Message" name="message">
              <Input.TextArea rows={4} placeholder="Optional message" />
            </Form.Item>
          </Col>
        </Row>

        <Button htmlType="submit" type="primary" size="large" loading={submitting} disabled={submitting}>
          Send Inquiry
        </Button>
      </Form>
    </Space>
  );
};
