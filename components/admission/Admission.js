import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "antd";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import AddNewStudentForm from "../../forms/AddNewStudentForm";

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
    title: "contact",
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
  },
];

const Admission = () => {
  const [visible, setVisible] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const newsStudentCollectionRef = collection(db, "new-student");
  useEffect(() => {
    const getStudent = async () => {
      const data = await getDocs(newsStudentCollectionRef);
      setDataSource(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getStudent();
    console.log(dataSource);
  }, []);
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
          footer={[]}
          width={1000}
        >
          <AddNewStudentForm handleModelCancel={handleModelCancel} />
        </Modal>
      </div>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
};

export default Admission;
