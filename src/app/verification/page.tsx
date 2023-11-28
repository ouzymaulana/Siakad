"use client";
import { FormHeaderLayout } from "@/src/Layout/FormHeader";
import VerificationView from "@/src/View/Verification";
import React from "react";

export default function Verification() {
  return (
    <FormHeaderLayout title="Verify Your Account">
      <VerificationView />
    </FormHeaderLayout>
  );
}
