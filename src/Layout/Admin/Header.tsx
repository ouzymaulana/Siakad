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
        padding: "20px",
        width: "calc(100% - 320px)",
        height: "100px",
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
        <Typography variant="h5" className={domine.className}>
          Hi Ouzy!, Welcome Back!
        </Typography>
      </Grid>
      <Grid>
        <Box height={60} width={60} borderRadius={4} overflow={"hidden"}>
          <Image
            src={"/img/profile.jpg"}
            height={60}
            width={60}
            alt="profile"
          />
        </Box>
      </Grid>
    </AppBar>
  );
}
