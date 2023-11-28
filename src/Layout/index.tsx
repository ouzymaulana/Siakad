import React from "react";
import Header from "./Header";
import Aside from "./Aside";
import { Grid } from "@mui/material";
import SidebarMenuStatusContexProvider from "../Context/sidebarMenuStatusContexProvider";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarMenuStatusContexProvider>
      <Header />
      <Aside />
      <Grid
        marginLeft={"229px"}
        marginTop={"60px"}
        height={"calc(100vh - 60px)"}
        padding={"20px"}
        sx={{ backgroundColor: "#FCF8FF" }}
      >
        {children}
      </Grid>
    </SidebarMenuStatusContexProvider>
  );
};
