import { Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

const FormLayout = {};

const AddCompanyForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="add-company"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
      size="large"
    >
      <Form.Item
        label="Company Name"
        name="company-name"
        rules={[
          {
            required: true,
            message: "Please input your Company Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Company Description"
        name="company-description"
        rules={[
          {
            required: true,
            message: "Please input your Company Description!",
          },
        ]}
      >
        <TextArea />
      </Form.Item>
    </Form>
  );
};

export default AddCompanyForm;
