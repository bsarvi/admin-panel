import React from "react";
import {
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Col,
  Row,
  Divider,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { db } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";

const { Option } = Select;
const AddNewStudentForm = () => {
  const newStudentCollectionRef = collection(db, "new-student");
  const [form] = Form.useForm();
  const addStudentDoc = async (data) => {
    await addDoc(newStudentCollectionRef, data);
  };
  const onFinish = (values) => {
    const datastore = {
      name: values.name,
      email: values.email,
      contact: values.contact,
      // dob: values.dob,
      address: values.address,
      gender: values.gender,
      hssc_details: {
        board: values.board,
        seatNumber: values.hsscSeatNumber,
        // passingDate: values.passingDate,
        engMks: values.engMksHssc,
        mathsMks: values.mathsMksHssc,
        phyMks: values.phyMksHssc,
        chemMks: values.chemMksHssc,
        otherMks: values.otherMksHssc,
        biomks: values.bioMksHssc,
      },
      gcet_details: {
        rollNumber: values.gcetRollNumber,
        mathsMks: values.mathsMksGcet,
        chemMks: values.chemMksGcet,
        phyMks: values.phyMksGcet,
      },
      neet_details: {
        rollNumber: values.neetRollNumber,
        neetScore: values.neetscore,
        airRank: values.airRank,
      },
    };
    addStudentDoc(datastore);
  };

  const onReset = () => {
    form.resetFields();
  };
  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      layout="vertical"
      size="large"
    >
      <Divider orientation="left">Persnal Details</Divider>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="space-around"
        align="middle"
      >
        <Col span={6}>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="contact" label="Contact">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="dob" label="DOB">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="space-around"
        align="middle"
      >
        <Col span={12}>
          <Form.Item name="address" label="Address">
            <TextArea />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item name="gender" label="Gender">
            <Select placeholder="select" allowClear>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="aadhar" label="Aadhar Number">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left">HSSC Details</Divider>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="space-around"
        align="middle"
      >
        <Col span={8}>
          <Form.Item name="board" label="Board">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="hsscSeatNumber" label="Seat Number">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="passingDate" label="Passing Date">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="space-around"
        align="middle"
      >
        <Col span={8}>
          <Form.Item name="engMksHssc" label="English Marks">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="phyMksHssc" label="Physics Marks">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="chemMksHssc" label="Chemistry Marks">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="space-around"
        align="middle"
      >
        <Col span={8}>
          <Form.Item name="mathsMksHssc" label="Maths Marks">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="bioMksHssc" label="Biology Marks">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="otherMksHssc" label="CS/BT/IP/VOC/OTHERS* Marks">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left">GCET Details</Divider>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="space-around"
        align="middle"
      >
        <Col span={6}>
          <Form.Item name="gcetRollNumber" label="GECT Roll Number">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="mathsMksGcet" label="Maths Marks">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="chemMksGcet" label="Chemistry Marks">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="phyMksGcet" label="Physics Marks">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left">NEET Details</Divider>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="space-around"
        align="middle"
      >
        <Form.Item name="neetRollNumber" label="NEET Roll Number">
          <Input />
        </Form.Item>
        <Form.Item name="airRank" label="All India Rank">
          <Input />
        </Form.Item>
        <Form.Item name="neetscore" label="NEET Score">
          <Input />
        </Form.Item>
      </Row>
      <Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default AddNewStudentForm;
