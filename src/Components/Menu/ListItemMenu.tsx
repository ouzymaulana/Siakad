"use client";
import { ListItem, Typography } from "@mui/material";
import React from "react";
import { Domine } from "next/font/google";
import type { IconType } from "react-icons";
import { useRouter } from "next/navigation";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
// import { useRouter } from "next/router";
const domine = Domine({
  subsets: ["latin"],
  weight: "600",
});

interface ListItemMenuProps {
  url: string;
  Icon: IconType;
  title: string;
  status: string;
}

export default function ListItemMenu({
  url,
  Icon,
  title,
  status,
}: ListItemMenuProps) {
  const route = useRouter();
  // const pathname = usePathname();
  const { selectMenu } = useDataSelectMenu();
  return (
    <ListItem
      onClick={() => route.push(url)}
      sx={{
        fontWeight: 600,
        display: "flex",
        paddingX: 3,
        paddingY: 1,
        gap: 3,
        cursor: "pointer",
        "&:hover": {
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(245,228,255,1) 100%)",
        },
        ...(selectMenu === status && {
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
        <Icon size={15} />
      </span>
      <Typography
        className={domine.className}
        variant="h6"
        textAlign={"center"}
        fontWeight={600}
        fontSize={"0.7em"}
      >
        {title}
      </Typography>
    </ListItem>
  );
}
