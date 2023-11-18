import { AdminLayout } from "@/src/Layout/Admin";
import AdminEvaluationsView from "@/src/View/Admin/Evaluations";
import React from "react";

export default function EvalutionData() {
  return (
    <AdminLayout>
      <AdminEvaluationsView />
    </AdminLayout>
  );
}
