import { AppBar, Box, Grid, Typography } from "@mui/material";
import { Domine } from "next/font/google";
import Image from "next/image";
import React from "react";

const domine = Domine({
  subsets: ["latin"],
  weight: "600",
});

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 2,
        padding: "20px",
        width: "calc(100% - 229px)",
        height: "60px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        boxShadow: "none",
        backgroundColor: "#FCF8FF",
        // paddingLeft: { md: "12rem" },
      }}
    >
      <Grid color={"black"}>
        <Typography variant="subtitle1" className={domine.className}>
          Hi Ouzy!, Welcome Back!
        </Typography>
      </Grid>
      <Grid>
        <Box height={40} width={38} borderRadius={3} overflow={"hidden"}>
          <Image
            src={"/img/profile.jpg"}
            height={40}
            width={38}
            alt="profile"
          />
        </Box>
      </Grid>
    </AppBar>
  );
}
