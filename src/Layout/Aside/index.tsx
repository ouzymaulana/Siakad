"use client";
import { Drawer, List, ListItem, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Koulen, Domine } from "next/font/google";
import { RxDashboard } from "react-icons/rx";
import { PiAddressBookBold } from "react-icons/pi";
import { LuClipboardCheck } from "react-icons/lu";
import { LuBookOpenCheck } from "react-icons/lu";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";

const koulen = Koulen({
  subsets: ["latin"],
  weight: "400",
});
const domine = Domine({
  subsets: ["latin"],
  weight: "600",
});

export default function Aside() {
  const route = useRouter();
  const { selectMenu } = useDataSelectMenu();

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
        <ListItem
          onClick={() => route.push("/")}
          sx={{
            fontWeight: 600,
            display: "flex",
            paddingX: 3,
            paddingY: 2,
            gap: 3,
            cursor: "pointer",
            "&:hover": {
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(245,228,255,1) 100%)",
            },
            ...(selectMenu === "/" && {
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(222,169,255,1) 100%)",
              borderRight: 4,
              borderRightColor: "#B132FF",
              ":hover": {
                background:
                  "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(222,169,255,1) 100%)",
                borderRight: 4,
                borderRightColor: "#B132FF",
              },
            }),
          }}
        >
          <span>
            <RxDashboard size={30} />
          </span>
          <Typography
            className={domine.className}
            variant="h6"
            textAlign={"center"}
            fontWeight={600}
          >
            Menu
          </Typography>
        </ListItem>
        <ListItem
          onClick={() => {
            route.push("/precense");
          }}
          sx={{
            fontWeight: 600,
            display: "flex",
            paddingX: 3,
            paddingY: 2,
            gap: 3,
            cursor: "pointer",
            "&:hover": {
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(245,228,255,1) 100%)",
            },
            ...(selectMenu === "precense" && {
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(222,169,255,1) 100%)",
              borderRight: 4,
              borderRightColor: "#B132FF",
              ":hover": {
                background:
                  "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(222,169,255,1) 100%)",
                borderRight: 4,
                borderRightColor: "#B132FF",
              },
            }),
          }}
        >
          <span>
            <PiAddressBookBold size={30} />
          </span>
          <Typography
            className={domine.className}
            variant="h6"
            textAlign={"center"}
            fontWeight={600}
          >
            Presence
          </Typography>
        </ListItem>
        <ListItem
          onClick={() => route.push("/krs")}
          sx={{
            fontWeight: 600,
            display: "flex",
            paddingX: 3,
            paddingY: 2,
            gap: 3,
            cursor: "pointer",
            "&:hover": {
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(245,228,255,1) 100%)",
            },
            ...(selectMenu === "krs" && {
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(222,169,255,1) 100%)",
              borderRight: 4,
              borderRightColor: "#B132FF",
              ":hover": {
                background:
                  "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(222,169,255,1) 100%)",
                borderRight: 4,
                borderRightColor: "#B132FF",
              },
            }),
          }}
        >
          <span>
            <LuClipboardCheck size={30} />
          </span>
          <Typography
            className={domine.className}
            variant="h6"
            textAlign={"center"}
            fontWeight={600}
          >
            KRS
          </Typography>
        </ListItem>
        <ListItem
          onClick={() => route.push("/evaluation")}
          sx={{
            fontWeight: 600,
            display: "flex",
            paddingX: 3,
            paddingY: 2,
            gap: 3,
            cursor: "pointer",
            "&:hover": {
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(245,228,255,1) 100%)",
            },
            ...(selectMenu === "evaluation" && {
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(222,169,255,1) 100%)",
              borderRight: 4,
              borderRightColor: "#B132FF",
              ":hover": {
                background:
                  "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(222,169,255,1) 100%)",
                borderRight: 4,
                borderRightColor: "#B132FF",
              },
            }),
          }}
        >
          <span>
            <LuBookOpenCheck size={30} />
          </span>
          <Typography
            className={domine.className}
            variant="h6"
            textAlign={"center"}
            fontWeight={600}
          >
            Evaluation
          </Typography>
        </ListItem>
      </List>
    </Drawer>
  );
}
