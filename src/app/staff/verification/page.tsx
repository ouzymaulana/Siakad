import { FormHeaderLayout } from "@/src/Layout/FormHeader";
import StaffVerificationView from "@/src/View/Verification/StaffVerify";
import React from "react";

export default function StaffVerification() {
  return (
    <FormHeaderLayout title="verify your account">
      <StaffVerificationView />
    </FormHeaderLayout>
  );
}
