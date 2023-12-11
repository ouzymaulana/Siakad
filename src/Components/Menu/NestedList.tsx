import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Domine } from "next/font/google";
import { IconType } from "react-icons";
import { usePathname, useRouter } from "next/navigation";

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
  statusRoute: string;
  statusRoute2: string;
}

export default function NestedList({
  url,
  url2,
  Icon,
  Icon2,
  Icon3,
  title,
  statusRoute,
  statusRoute2,
}: ListItemMenuProps) {
  const [open, setOpen] = useState(false);
  const { selectMenu } = useDataSelectMenu();
  const route = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (pathname == url || url2) {
      setOpen(true);
    }
  }, []);
  return (
    <>
      <ListItem
        sx={{
          display: "flex",
          position: "relative",
          paddingX: 3,
          paddingY: 1,
          gap: 3,
          cursor: "pointer",
          "&:hover": {
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(245,228,255,1) 100%)",
          },
        }}
        onClick={handleClick}
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
        {/* <Box sx={{ backgroundColor: "red" }} position={"absolute"} right={20}> */}
        {open ? (
          <ExpandLess
            sx={{ position: "absolute", right: "20px", fontSize: "15px" }}
          />
        ) : (
          <ExpandMore
            sx={{ position: "absolute", right: "20px", fontSize: "15px" }}
          />
        )}
        {/* </Box> */}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{
              pl: 4,
              ...(selectMenu === statusRoute && {
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
            onClick={() => route.push(url)}
          >
            <ListItemIcon>
              <Icon2 size={15} />
            </ListItemIcon>
            <Typography className={domine.className} fontSize={"0.7em"}>
              Students
            </Typography>
          </ListItemButton>
          <ListItemButton
            sx={{
              pl: 4,
              ...(selectMenu === statusRoute2 && {
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
            onClick={() => route.push(url2)}
          >
            <ListItemIcon>
              <Icon3 size={15} />
            </ListItemIcon>
            <Typography className={domine.className} sx={{ fontSize: "0.7em" }}>
              Lecturer
            </Typography>
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
