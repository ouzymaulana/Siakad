import React from "react";
import Header from "./Header";
import Aside from "./Aside";
import { Grid } from "@mui/material";
import SidebarMenuStatusContexProvider from "../Context/sidebarMenuStatusContexProvider";
// import { AbilityProvier as AbilityProvider } from "./../Context/AbilityContext";
import ActionTableContextProvider from "../Context/ActionTableContextProvider";
import AlertMessageContextProvider from "../Context/Alert/AlertContextProvider";
import ActionTableLecturerContextProvider from "../Context/ActionTableLacturerContexProvider";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <AbilityProvider>
    <AlertMessageContextProvider>
      <SidebarMenuStatusContexProvider>
        <ActionTableContextProvider>
          <ActionTableLecturerContextProvider>
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
          </ActionTableLecturerContextProvider>
        </ActionTableContextProvider>
      </SidebarMenuStatusContexProvider>
    </AlertMessageContextProvider>
    // </AbilityProvider>
  );
};
