import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

//admission
const firebaseConfig = {
  apiKey: "AIzaSyCJ0nqBfeXVtH2xGypHJ236B2txJ_YQJw4",
  authDomain: "admission-df0bb.firebaseapp.com",
  projectId: "admission-df0bb",
  storageBucket: "admission-df0bb.appspot.com",
  messagingSenderId: "475050451941",
  appId: "1:475050451941:web:8838f3823c554d839d050c",
  measurementId: "G-50MX94MCP1",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//student info
// const firebaseConfigForStudentInfo = {
//   apiKey: "AIzaSyDsim0jpEnMoQ6JNj0HPehBTUjvfQTkcO0",
//   authDomain: "student-inforamtion.firebaseapp.com",
//   projectId: "student-inforamtion",
//   storageBucket: "student-inforamtion.appspot.com",
//   messagingSenderId: "919075896531",
//   appId: "1:919075896531:web:b80bc150cc0736a4566826",
//   measurementId: "G-J51EVHBPY6",
// };
// const studentiInfoApp = initializeApp(firebaseConfigForStudentInfo);
// export const studenInfoDb = getFirestore(studentiInfoApp);
