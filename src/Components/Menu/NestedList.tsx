import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Domine } from "next/font/google";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";

const domine = Domine({
  subsets: ["latin"],
  weight: "600",
});

interface ListItemMenuProps {
  url: string;
  url2: string;
  Icon: IconType;
  Icon2: IconType;
  Icon3: IconType;
  title: string;
}

export default function NestedList({
  url,
  url2,
  Icon,
  Icon2,
  Icon3,
  title,
}: ListItemMenuProps) {
  const [open, setOpen] = useState(false);
  const { selectMenu } = useDataSelectMenu();
  const route = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem
        sx={{
          display: "flex",
          position: "relative",
          paddingX: 3,
          paddingY: 2,
          gap: 3,
          cursor: "pointer",
          "&:hover": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(245,228,255,1) 100%)",
          },
          ...(open && {
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
        onClick={handleClick}
      >
        <span>
          <Icon size={30} />
        </span>
        <Typography
          className={domine.className}
          variant="h6"
          textAlign={"center"}
          fontWeight={600}
          fontSize={"1em"}
        >
          {title}
        </Typography>
        {/* <Box sx={{ backgroundColor: "red" }} position={"absolute"} right={20}> */}
        {open ? (
          <ExpandLess sx={{ position: "absolute", right: "20px" }} />
        ) : (
          <ExpandMore sx={{ position: "absolute", right: "20px" }} />
        )}
        {/* </Box> */}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => route.push(url)}>
            <ListItemIcon>
              <Icon2 size={25} />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={() => route.push(url2)}>
            <ListItemIcon>
              <Icon3 size={25} />
            </ListItemIcon>
            <ListItemText primary="Lecturer" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
