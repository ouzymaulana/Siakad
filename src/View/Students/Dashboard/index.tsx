"use client";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";

export default function DashboardView() {
  const { setSelectMenu } = useDataSelectMenu();
  useEffect(() => {
    setSelectMenu("Dashboard");
  }, []);
  return (
    <React.Fragment>
      <Typography>DashboardView</Typography>
    </React.Fragment>
  );
}
