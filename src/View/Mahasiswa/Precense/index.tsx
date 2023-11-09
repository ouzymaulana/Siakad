"use client";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";

export default function PrecenseView() {
  const { selectMenu, setSelectMenu } = useDataSelectMenu();
  useEffect(() => {
    setSelectMenu("precense");
  }, []);
  console.log("====================================");
  console.log(selectMenu);
  console.log("====================================");
  return <Typography>Precense</Typography>;
}
