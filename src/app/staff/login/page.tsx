import { FormHeaderLayout } from "@/src/Layout/FormHeader";
import StaffLoginView from "@/src/View/Login/StaffLogin";
import React from "react";

export default function StaffLogin() {
  return (
    <FormHeaderLayout title="Login to your account">
      <StaffLoginView />
    </FormHeaderLayout>
  );
}
