import { AdminLayout } from "@/src/Layout/Admin";
import AdminKrsView from "@/src/View/Admin/Krs";
import React from "react";

export default function Krs() {
  return (
    <AdminLayout>
      <AdminKrsView />
    </AdminLayout>
  );
}
