"use client";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";

export default function AdminPrecenseStudentsView() {
  const { setSelectMenu } = useDataSelectMenu();
  useEffect(() => {
    setSelectMenu("admin/precense");
  }, []);
  return (
    <>
      <Typography>admin precense</Typography>
    </>
  );
}
