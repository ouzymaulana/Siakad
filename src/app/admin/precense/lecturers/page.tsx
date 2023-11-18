import { AdminLayout } from "@/src/Layout/Admin";
import AdminLecturersPrecenseView from "@/src/View/Admin/Precense/Lecturers";
import React from "react";

export default function LecturersPrecenseManagement() {
  return (
    <AdminLayout>
      <AdminLecturersPrecenseView />
    </AdminLayout>
  );
}
