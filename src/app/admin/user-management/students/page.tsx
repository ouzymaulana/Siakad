import { MainLayout } from "@/src/Layout";
import StudentManagementView from "@/src/View/Admin/UserManagement/Students";
import React from "react";

export default function StudentsManagement() {
  return (
    <MainLayout>
      <StudentManagementView />
    </MainLayout>
  );
}
// export async function getServerSideProps() {
//   try {
//     const dataStudentsResponse = await axios.get(
//       "http://localhost:5000/api/students"
//     );

//     if (dataStudentsResponse.data.data.status === "success") {
//       const getDataStudents = dataStudentsResponse.data.data.userData;

//       return {
//         props: { getDataStudents },
//       };
//     } else {
//       console.error(
//         "Error fetching data:",
//         dataStudentsResponse.data.data.message || "Unknown error"
//       );
//     }
//   } catch (error) {
//     console.error(error);
//   }

//   return {
//     props: { getDataStudents: [] },
//   };
// }
