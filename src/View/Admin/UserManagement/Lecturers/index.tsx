"use client";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";

export default function LecturersManagementView() {
  const { setSelectMenu } = useDataSelectMenu();
  useEffect(() => {
    setSelectMenu("/admin/user-management");
  }, []);
  return (
    <>
      <Typography>USER MANAGEMENT lecturers</Typography>
    </>
  );
}
