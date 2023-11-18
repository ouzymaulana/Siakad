"use client";
import { FormHeaderLayout } from "@/src/Layout/FormHeader";
import {
  Alert,
  Box,
  Button,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Domine } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        nim: formik.values.nim,
        password: formik.values.password,
      });

      console.log("====================================");
      console.log(response);
      console.log("====================================");
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      nim: "",
      password: "",
    },

    validationSchema: Yup.object({
      nim: Yup.number().typeError("NIM must be a number").required(),
      password: Yup.string().required(),
    }),

    onSubmit: handleSubmit,
  });

  return (
    <FormHeaderLayout>
      {/* {alertMessage.isAlertToken && ( */}
      <Alert severity="error" sx={{ marginBottom: "10px" }}>
        ga bisa
      </Alert>
      {/* )} */}
      <form
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}
        onSubmit={formik.handleSubmit}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Typography className={domine.className}>Nim</Typography>
          <CssTextField
            fullWidth
            name={"nim"}
            placeholder="Your Nim"
            autoComplete="off"
            value={formik.values.nim}
            onChange={formik.handleChange}
          />
          {formik.touched.nim && formik.errors.nim && (
            <span style={{ color: "red", fontFamily: "Inter" }}>
              {formik.errors.nim}
            </span>
          )}
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Typography className={domine.className}>Password</Typography>
          <CssTextField
            fullWidth
            name={"password"}
            placeholder="Your Password"
            autoComplete="off"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <span style={{ color: "red", fontFamily: "Inter" }}>
              {formik.errors.password}
            </span>
          )}
        </Box>
        <Button
          type="submit"
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
            <Link href={"/registration"} style={{ color: "#9852C3" }}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </form>
    </FormHeaderLayout>
  );
}
