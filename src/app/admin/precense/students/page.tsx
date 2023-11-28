import { AdminLayout } from "@/src/Layout/Admin";
import AdminPrecenseStudentsView from "@/src/View/Admin/Precense/Students";
import React from "react";

export default function StudentsPrecenseManagement() {
  return (
    <AdminLayout>
      <AdminPrecenseStudentsView />
    </AdminLayout>
  );
}
