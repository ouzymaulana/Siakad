import { AdminLayout } from "@/src/Layout/Admin";
import AdminNewsManagementView from "@/src/View/Admin/NewsManagement";
import React from "react";

export default function NewsManagement() {
  return (
    <AdminLayout>
      <AdminNewsManagementView />
    </AdminLayout>
  );
}
