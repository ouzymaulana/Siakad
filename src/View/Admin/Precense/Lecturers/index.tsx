"use client";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";

export default function AdminLecturersPrecenseView() {
  const { setSelectMenu } = useDataSelectMenu();
  useEffect(() => {
    setSelectMenu("admin/precense/lecturer");
  }, []);
  return (
    <>
      <Typography>admin precense lecturer</Typography>
    </>
  );
}
