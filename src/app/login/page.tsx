"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  styled,
  // styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Domine, Koulen } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const koulen = Koulen({
  subsets: ["latin"],
  weight: "400",
});
const domine = Domine({
  subsets: ["latin"],
  weight: "600",
});

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: grey[600],
      borderRadius: "10px",
      borderWidth: 3,
      width: "100%",
      fontSize: "2em",
    },
    "&:hover fieldset": {
      borderColor: grey[600],
    },
    "&.Mui-focused fieldset": {
      borderColor: grey[600],
      borderWidth: 3,
    },
  },
});

export default function Login() {
  return (
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
        width={"800px"}
        borderRadius={"26px"}
        paddingTop={"20px"}
        paddingBottom={"30px"}
        paddingX={"80px"}
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
        <Box display={"flex"} justifyContent={"center"} paddingY={"30px"}>
          <Typography variant="h6" className={domine.className}>
            Login to your account
          </Typography>
        </Box>
        <Box>
          <FormControl
            fullWidth
            sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
          >
            <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
              <Typography className={domine.className}>Nim</Typography>
              <CssTextField
                fullWidth
                name={"name"}
                placeholder="Your Nim"
                autoComplete="off"
              />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
              <Typography className={domine.className}>Password</Typography>
              <CssTextField
                fullWidth
                name={"name"}
                placeholder="Your Password"
                autoComplete="off"
              />
            </Box>
            <Button
              size="large"
              variant="contained"
              sx={{
                color: "black",
                padding: "15px",
                borderRadius: "10px",
                backgroundColor: "#DEA9FF",
                ":hover": {
                  bgcolor: "#DEA9FF",
                },
              }}
            >
              <Typography className={domine.className} fontSize={"1.3em"}>
                sign in
              </Typography>
            </Button>

            <Box display={"flex"} justifyContent={"center"}>
              <Typography className={domine.className}>
                Dont have an account ?{" "}
                <Link href={"#"} style={{ color: "#9852C3" }}>
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
}
