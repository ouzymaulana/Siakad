"use client";
import { Drawer, List, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Koulen } from "next/font/google";
import { RxDashboard } from "react-icons/rx";
import { LuClipboardCheck } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { grey } from "@mui/material/colors";
import ListItemMenu from "../../Components/Menu/ListItemMenu";
import NestedList from "@/src/Components/Menu/NestedList";
// import { login } from "@/src/Helper/can";
// import Cookies from "js-cookie";
// import jwt from "jsonwebtoken";

const koulen = Koulen({
  subsets: ["latin"],
  weight: "400",
});

export default function Aside() {
  // const ability = useAbility();

  // const auth = async () => {
  // const rules = await login("user");
  // const token = Cookies.get("token");
  // const jwtData = jwt.decode(token);
  // if (token) {
  //   console.log(token);
  // const jwtData = jwt.decode(token);

  // console.log("====================================");
  // console.log(jwtData != null ? jwtData.role : null);
  // console.log("====================================");

  // ability.update(rules);
  // } else {
  // Handle the case when the token is undefined
  // console.error("Token is undefined");
  // }
  // };

  // useEffect(() => {
  //   auth();
  // }, []);
  return (
    <Drawer
      elevation={0}
      sx={{
        zIndex: 10,
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
        {/* <ListItemMenu
            url="/evaluation"
            Icon={LuBookOpenCheck}
            title="Evaluation"
            status="Evaluation"
          /> */}
        <ListItemMenu
          url="/krs"
          Icon={LuClipboardCheck}
          title="KRS"
          status="KRS"
        />
        <ListItemMenu
          url="/mahasiswa/news"
          Icon={MdNotificationsNone}
          title="News"
          status="News"
        />
        <NestedList
          url="/admin/user-management/students"
          url2="/admin/user-management/lecturers"
          Icon={LuUsers2}
          Icon2={PiStudent}
          Icon3={FaChalkboardTeacher}
          title="User Management"
          statusRoute="/admin/user-management/students"
          statusRoute2="/admin/user-management/lecturers"
        />

        <ListItemMenu
          url="/admin/krs"
          Icon={LuClipboardCheck}
          title="KRS Management"
          status={"admin/krs"}
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
