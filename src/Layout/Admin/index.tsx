import React from "react";
import Header from "./Header";
import Aside from "./Aside";
import { Grid } from "@mui/material";
import SidebarMenuStatusContexProvider from "@/src/Context/sidebarMenuStatusContexProvider";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarMenuStatusContexProvider>
      <Header />
      <Aside />
      <Grid
        marginLeft={"320px"}
        marginTop={"100px"}
        height={"calc(100vh - 100px)"}
        padding={"20px"}
        sx={{ backgroundColor: "#FCF8FF" }}
      >
        {children}
      </Grid>
    </SidebarMenuStatusContexProvider>
  );
};
