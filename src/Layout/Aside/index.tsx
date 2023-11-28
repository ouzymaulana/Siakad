"use client";
import { Drawer, List, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Koulen } from "next/font/google";
import { RxDashboard } from "react-icons/rx";
import { LuClipboardCheck } from "react-icons/lu";
import { LuBookOpenCheck } from "react-icons/lu";
import { MdNotificationsNone } from "react-icons/md";
import { grey } from "@mui/material/colors";
import ListItemMenu from "../../Components/Menu/ListItemMenu";

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
        boxSizing: "border-box",
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar
        sx={{
          borderBottom: 2,
          borderColor: grey[400],
          height: { lg: "60px", sm: "60px", xs: "10px" },
          display: "flex",
          gap: 2,
        }}
      >
        <Image src="/img/logo.svg" height={50} width={50} alt="logo" />
        <Typography variant="h5" className={koulen.className}>
          CAMPUS EDGE
        </Typography>
      </Toolbar>
      <List sx={{ marginTop: 1 }}>
        <ListItemMenu
          url="/"
          Icon={RxDashboard}
          title="Dashboard"
          status="Dashboard"
        />
        {/* <ListItemMenu
          url="/precense"
          Icon={PiAddressBookBold}
          title="Precense"
          status="Precense"
        /> */}
        <ListItemMenu
          url="/krs"
          Icon={LuClipboardCheck}
          title="KRS"
          status="KRS"
        />
        <ListItemMenu
          url="/evaluation"
          Icon={LuBookOpenCheck}
          title="Evaluation"
          status="Evaluation"
        />
        <ListItemMenu
          url="/mahasiswa/news"
          Icon={MdNotificationsNone}
          title="News"
          status="News"
        />
      </List>
    </Drawer>
  );
}
