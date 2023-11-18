"use client";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";

export default function AdminDashboardView() {
  const { setSelectMenu } = useDataSelectMenu();
  useEffect(() => {
    setSelectMenu("admin");
  }, []);
  return (
    <React.Fragment>
      <Typography>admin DashboardView</Typography>
    </React.Fragment>
  );
}
