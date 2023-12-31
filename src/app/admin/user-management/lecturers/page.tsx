import { MainLayout } from "@/src/Layout";
import LecturersManagementView from "@/src/View/Admin/UserManagement/Lecturers";
import React from "react";

export default function LecturersManagement() {
  return (
    <MainLayout>
      <LecturersManagementView />
    </MainLayout>
  );
}
