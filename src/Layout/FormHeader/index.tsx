import AlertMessageContextProvider from "@/src/Context/Alert/AlertContextProvider";
import AlertFormContextProvider from "@/src/Context/Alert/FormAlertContextProvider";
import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Domine, Koulen } from "next/font/google";
import Image from "next/image";
import React from "react";

const koulen = Koulen({
  subsets: ["latin"],
  weight: "400",
});
const domine = Domine({
  subsets: ["latin"],
  weight: "600",
});

export const FormHeaderLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <AlertMessageContextProvider>
      <AlertFormContextProvider>
        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ backgroundColor: "#FCF8FF" }}
          height={"100vh"}
        >
          <Grid
            sx={{ backgroundColor: "#FFFFFF" }}
            // height={"500px"}
            width={"500px"}
            borderRadius={"26px"}
            paddingTop={"20px"}
            paddingBottom={"30px"}
            paddingX={"50px"}
          >
            <Box
              sx={{
                borderBottom: 3,
                borderColor: grey[400],
                height: { lg: "80px", sm: "60px", xs: "10px" },
                display: "flex",
                gap: 2,
              }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src="/img/logo.svg" height={80} width={80} alt="logo" />
              <Typography variant="h4" className={koulen.className}>
                CAMPUS EDGE
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"} paddingY={"10px"}>
              <Typography variant="subtitle1" className={domine.className}>
                {title}
              </Typography>
            </Box>
            <Box>{children}</Box>
          </Grid>
        </Grid>
      </AlertFormContextProvider>
    </AlertMessageContextProvider>
  );
};
