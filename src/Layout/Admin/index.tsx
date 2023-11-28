import React from "react";
import Header from "./Header";
import Aside from "./Aside";
import { Grid } from "@mui/material";
import SidebarMenuStatusContexProvider from "@/src/Context/sidebarMenuStatusContexProvider";
import AlertMessageContextProvider from "@/src/Context/Alert/AlertContextProvider";
import PaginationContexProvider from "@/src/Context/PageContexProvider";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarMenuStatusContexProvider>
      <AlertMessageContextProvider>
        <PaginationContexProvider>
          <Header />
          <Aside />
          <Grid
            marginLeft={"229px"}
            marginTop={"60px"}
            height={"calc(100vh - 60px)"}
            padding={"20px"}
            position={"relative"}
            sx={{ backgroundColor: "#FCF8FF" }}
          >
            {children}
          </Grid>
        </PaginationContexProvider>
      </AlertMessageContextProvider>
    </SidebarMenuStatusContexProvider>
  );
};
