"use client";
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
import { useAlertForm } from "@/src/Context/Alert/FormAlertContextProvider";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const domine = Domine({
  subsets: ["latin"],
  weight: "600",
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: grey[500],
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: grey[600],
      borderRadius: "6px",
      borderWidth: 2,
      width: "100%",
      size: "small",
    },
    "&:hover fieldset": {
      borderColor: grey[600],
    },
    "&.Mui-focused fieldset": {
      borderColor: grey[600],
    },
  },
});

export default function LoginView() {
  // const [alertMessage, setAlertMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { alertForm, setAlertForm } = useAlertForm();
  const route = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        nim: formik.values.nim,
        password: formik.values.password,
      });

      if (response.data.status === "fail") {
        setAlertForm({
          isOpen: true,
          message: response.data.data.message,
          status: "error",
        });
      }

      const result = response.data;

      if (response.data.status === "success") {
        Cookies.set("token", result.data.token, { expires: 1 / 24 });

        route.push("/");
      }
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
    <>
      {alertForm.isOpen && (
        <Alert severity="error" sx={{ marginBottom: "10px" }}>
          {alertForm.message}
        </Alert>
      )}
      <form
        style={{ display: "flex", flexDirection: "column", gap: "25px" }}
        onSubmit={formik.handleSubmit}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Typography className={domine.className} variant="subtitle2">
            Nim
          </Typography>
          <CssTextField
            fullWidth
            size="small"
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
        <Box display={"flex"} flexDirection={"column"}>
          <Typography className={domine.className} variant="subtitle2">
            Password
          </Typography>
          <Box position={"relative"}>
            <CssTextField
              fullWidth
              type={showPassword ? "text" : "password"}
              size="small"
              name={"password"}
              placeholder="Your Password"
              autoComplete="off"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <Box
              position={"absolute"}
              right={"10px"}
              top={"11px"}
              sx={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <VisibilityOffOutlinedIcon fontSize="small" />
              ) : (
                <VisibilityOutlinedIcon fontSize="small" />
              )}
            </Box>
          </Box>
          {formik.touched.password && formik.errors.password && (
            <span style={{ color: "red", fontFamily: "Inter" }}>
              {formik.errors.password}
            </span>
          )}
        </Box>
        <Button
          disableElevation
          type="submit"
          size="small"
          variant="contained"
          sx={{
            fontSize: "0.6em",
            color: "black",
            padding: "10px",
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
          <Typography className={domine.className} variant="caption">
            Want to verify your account ?{" "}
            <Link href={"/verification"} style={{ color: "#9852C3" }}>
              Verify
            </Link>
          </Typography>
        </Box>
      </form>
    </>
  );
}
