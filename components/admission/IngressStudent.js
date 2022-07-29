import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "antd";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import IngressForm from "../../forms/IngressForm";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Contact Number",
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "Group",
    dataIndex: "group",
    key: "group",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    filters: [{ text: "OPEN", value: "OPEN" }],
  },
];

const IngressStudent = () => {
  const [visible, setVisible] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const newAdmissionCollectionRef = collection(db, "new-admission");
  useEffect(() => {
    const getStudent = async () => {
      const data = await getDocs(newAdmissionCollectionRef);
      setDataSource(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getStudent();
  }, [dataSource]);

  const handleModelCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const showModal = () => {
    setVisible(true);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <Button type="primary" onClick={showModal}>
          Add new student
        </Button>

        <Modal
          title="Ingress Student"
          visible={visible}
          onCancel={handleModelCancel}
          width={800}
        >
          <IngressForm handleModelCancel={handleModelCancel} />
        </Modal>
      </div>

      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default IngressStudent;
