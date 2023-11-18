"use client";
import { FormHeaderLayout } from "@/src/Layout/FormHeader";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Domine } from "next/font/google";
import React from "react";

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
    <FormHeaderLayout>
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
          <Typography className={domine.className}>Nim</Typography>
          <CssTextField
            fullWidth
            name={"name"}
            placeholder="Your Nim"
            autoComplete="off"
          />
        </Box>
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
            sign up
          </Typography>
        </Button>
      </FormControl>
    </FormHeaderLayout>
  );
}
