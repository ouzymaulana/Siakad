import { AdminLayout } from "@/src/Layout/Admin";
import StudentManagementView from "@/src/View/Admin/UserManagement/Students";
import React from "react";

export default function StudentsManagement() {
  return (
    <AdminLayout>
      <StudentManagementView />
    </AdminLayout>
  );
}
