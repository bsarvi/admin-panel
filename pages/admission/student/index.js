import { Button, Modal } from "antd";
import React, { useState } from "react";
import AddNewStudentForm from "../../../forms/AddNewStudentForm";

const index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button type="primary" onClick={showModal}>
        New Student Form
      </Button>
      <Modal
        title="New Student"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={[]}
      >
        <AddNewStudentForm />
      </Modal>
    </div>
  );
};

export default index;
