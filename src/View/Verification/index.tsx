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
import axios from "axios";
import { useFormik } from "formik";
import { Domine } from "next/font/google";
import React, { useState } from "react";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { sweetAlert } from "@/src/Context/Alert/SweetAlert";

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

export default function VerificationView() {
  const [alertMessageForm, setAlertMessageForm] = useState({
    status: false,
    message: null as null | string,
  });

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/verify", {
        nim: formik.values.nim,
        password: formik.values.password,
        confirmPassword: formik.values.confirmPassword,
      });

      if (response.data.status === "fail") {
        setAlertMessageForm({
          status: true,
          message: response.data.data.message,
        });
      }

      if (response.data.status === "success") {
        sweetAlert("success", "Verification is successful, you can login now");
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      nim: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      nim: Yup.number().typeError("NIM must be a number").required(),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required(),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "passwords are not the same")
        .required(),
    }),

    onSubmit: handleSubmit,
  });
  return (
    <>
      {alertMessageForm.status && (
        <Alert severity="error" sx={{ marginBottom: "10px" }}>
          {alertMessageForm.message}
        </Alert>
      )}
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Typography className={domine.className} variant="body2">
            Nim
          </Typography>
          <CssTextField
            size="small"
            fullWidth
            name={"nim"}
            placeholder="Your Nim"
            autoComplete="off"
            value={formik.values.nim}
            onChange={formik.handleChange}
          />
          {formik.touched.nim && formik.errors.nim && (
            <Typography
              variant="body2"
              style={{ color: "red", fontFamily: "Inter" }}
            >
              {formik.errors.nim}
            </Typography>
          )}
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography className={domine.className} variant="body2">
            New Password
          </Typography>
          <CssTextField
            size="small"
            fullWidth
            name={"password"}
            placeholder="Your Password"
            autoComplete="off"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <Typography
              variant="body2"
              style={{ color: "red", fontFamily: "Inter" }}
            >
              {formik.errors.password}
            </Typography>
          )}
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography className={domine.className} variant="body2">
            Confirm Password
          </Typography>
          <CssTextField
            size="small"
            fullWidth
            name={"confirmPassword"}
            placeholder="Your Password"
            autoComplete="off"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <Typography
              variant="body2"
              style={{ color: "red", fontFamily: "Inter" }}
            >
              {formik.errors.confirmPassword}
            </Typography>
          )}
        </Box>
        <Button
          disableElevation
          size="medium"
          variant="contained"
          type="submit"
          sx={{
            fontSize: "0.7em",
            color: "black",
            marginTop: "10px",
            padding: "10px",
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
      </form>
    </>
  );
}
