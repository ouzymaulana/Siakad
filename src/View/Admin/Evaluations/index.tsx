"use client";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";

export default function AdminEvaluationsView() {
  const { setSelectMenu } = useDataSelectMenu();
  useEffect(() => {
    setSelectMenu("admin/evaluation");
  }, []);
  return (
    <>
      <Typography>admin evaluation</Typography>
    </>
  );
}
