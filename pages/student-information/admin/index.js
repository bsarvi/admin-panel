import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { studenInfoDb } from "../../../firebase-config";

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
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Date Of Birth",
    dataIndex: "dob",
    key: "dob",
  },
];

const index = () => {
  const [dataSource, setDataSource] = useState([]);
  const newStudentInfoCollectionRef = collection(db, "student-info");
  useEffect(() => {
    const getStudent = async () => {
      const data = await getDocs(newStudentInfoCollectionRef);

      setDataSource(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getStudent();
  }, []);

  return <div>index</div>;
};

export default index;
