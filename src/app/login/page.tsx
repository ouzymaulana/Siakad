"use client";
import { FormHeaderLayout } from "@/src/Layout/FormHeader";
import React from "react";
import LoginView from "@/src/View/Login";

export default function Login() {
  return (
    <FormHeaderLayout title="Login to your account">
      <LoginView />
    </FormHeaderLayout>
  );
}
