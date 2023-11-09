"use client";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";

export default function EvaluationView() {
  const { setSelectMenu } = useDataSelectMenu();
  useEffect(() => {
    setSelectMenu("evaluation");
  }, []);
  return (
    <React.Fragment>
      <Typography>Evaluation</Typography>
    </React.Fragment>
  );
}
