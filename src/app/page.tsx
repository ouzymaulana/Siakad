"use client";
import { MainLayout } from "../Layout";
import DashboardView from "../View/Students/Dashboard";

export default function Home() {
  return (
    <MainLayout>
      <DashboardView />
    </MainLayout>
  );
}
