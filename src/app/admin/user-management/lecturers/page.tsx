import { AdminLayout } from "@/src/Layout/Admin";
import LecturersManagementView from "@/src/View/Admin/UserManagement/Lecturers";
import React from "react";

export default function LecturersManagement() {
  return (
    <AdminLayout>
      <LecturersManagementView />
    </AdminLayout>
  );
}
