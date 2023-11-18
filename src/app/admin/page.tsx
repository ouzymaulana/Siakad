import { AdminLayout } from "@/src/Layout/Admin";
import AdminDashboardView from "@/src/View/Admin/Dashboard";
import React from "react";

export default function Admin() {
  return (
    <AdminLayout>
      <AdminDashboardView />
    </AdminLayout>
  );
}
