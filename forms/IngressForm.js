import React from "react";
import { Input, Form, Cascader, Button, Row, Col } from "antd";
import { db } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";

const options = [
  {
    value: "GENERAL",
    label: "GENERAL",
    children: [
      { value: "TFW", label: "TFW" },
      { value: "OPEN", label: "OPEN" },
      { value: "PwD", label: "PwD" },
      { value: "FF", label: "FF" },
      { value: "GN", label: "GN" },
    ],
  },
  {
    value: "ST",
    label: "ST",
    children: [
      { value: "OPEN", label: "OPEN" },
      { value: "PwD", label: "PwD" },
      { value: "FF", label: "FF" },
      { value: "GN", label: "GN" },
    ],
  },
  {
    value: "OBC",
    label: "OBC",
    children: [
      { value: "OPEN", label: "OPEN" },
      { value: "PwD", label: "PwD" },
      { value: "FF", label: "FF" },
      { value: "GN", label: "GN" },
    ],
  },
  {
    value: "OTHER",
    label: "OTHER",
    children: [
      { value: "TFW", label: "TFW" },
      { value: "NRI", label: "NRI" },
      { value: "CSP", label: "CSP" },
      { value: "SC", label: "SC" },
    ],
  },
];

const IngressForm = (handleModelCancel, initialValues) => {
  const [form] = Form.useForm();
  form.setFieldValue = initialValues != null ? initialValues : null;
  const newAdmissionCollectionRef = collection(db, "new-admission");

  const ingressUser = async (data) => {
    await addDoc(newAdmissionCollectionRef, data);
  };
  const onFormFinish = (values) => {
    const dataStore = {
      name: values.name,
      email: values.email,
      contact: values.contact,
      group: values.admissionType[0],
      category: values.admissionType[1],
    };
    ingressUser(dataStore);
    handleModelCancel();
  };
  const onCascaderChange = (value) => {
    console.log(value);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <Form
      form={form}
      name="ingressform"
      onFinish={onFormFinish}
      layout="vertical"
      size="large"
    >
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="space-around"
        align="middle"
      >
        <Col span={12}>
          <Form.Item name="name" label="Name">
            <Input placeholder="Bharat Sarvi" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="email" label="Email">
            <Input placeholder="bharasarvi@gmail.com" />
          </Form.Item>
        </Col>
      </Row>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="space-around"
        align="middle"
      >
        <Col span={12}>
          <Form.Item name="contact" label="Contact Number">
            <Input placeholder="9049776641" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="admissionType" label="Admission Type">
            <Cascader
              options={options}
              onChange={onCascaderChange}
              placeholder="Please select"
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default IngressForm;
