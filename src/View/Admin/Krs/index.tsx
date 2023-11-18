"use client";

import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";

export default function AdminKrsView() {
  const { setSelectMenu } = useDataSelectMenu();
  useEffect(() => {
    setSelectMenu("admin/krs");
  }, []);
  return (
    <>
      <Typography>Admin Krs View</Typography>
    </>
  );
}
