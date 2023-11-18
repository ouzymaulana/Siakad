"use client";
import { Drawer, List, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Koulen } from "next/font/google";
import { RxDashboard } from "react-icons/rx";
import { PiAddressBookBold } from "react-icons/pi";
import { LuClipboardCheck } from "react-icons/lu";
import { LuBookOpenCheck } from "react-icons/lu";
import { MdNotificationsNone } from "react-icons/md";
import { grey } from "@mui/material/colors";
import ListItemMenu from "../../Components/Menu/ListItemMenu";
import NestedList from "@/src/Components/Menu/NestedList";
import { LuUsers2 } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";

const koulen = Koulen({
  subsets: ["latin"],
  weight: "400",
});

export default function Aside() {
  return (
    <Drawer
      elevation={0}
      sx={{
        position: "relative",
        border: "0",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "320px",
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar
        sx={{
          borderBottom: 2,
          borderColor: grey[400],
          height: { lg: "80px", sm: "60px", xs: "10px" },
          display: "flex",
          gap: 2,
        }}
      >
        <Image src="/img/logo.svg" height={80} width={80} alt="logo" />
        <Typography variant="h4" className={koulen.className}>
          CAMPUS EDGE
        </Typography>
      </Toolbar>
      <List sx={{ marginTop: 1 }}>
        <ListItemMenu
          url="/admin"
          Icon={RxDashboard}
          title="Dashboard"
          status={"admin"}
        />
        <NestedList
          url="/admin/user-management/students"
          url2="/admin/user-management/lecturers"
          Icon={LuUsers2}
          Icon2={PiStudent}
          Icon3={FaChalkboardTeacher}
          title="User Management"
        />
        <NestedList
          url="/admin/precense/students"
          url2="/admin/precense/lecturers"
          Icon={PiAddressBookBold}
          Icon2={PiStudent}
          Icon3={FaChalkboardTeacher}
          title="Precense Data"
        />

        <ListItemMenu
          url="/admin/krs"
          Icon={LuClipboardCheck}
          title="KRS Management"
          status={"admin/krs"}
        />
        <ListItemMenu
          url="/admin/evaluation-data"
          Icon={LuBookOpenCheck}
          title="Evaluation Data"
          status={"admin/evaluation"}
        />
        <ListItemMenu
          url="/admin/news-management"
          Icon={MdNotificationsNone}
          title="News Management"
          status={"admin/news"}
        />
      </List>
    </Drawer>
  );
}
