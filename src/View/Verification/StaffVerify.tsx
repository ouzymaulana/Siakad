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

export default function StaffVerificationView() {
  const [alertMessageForm, setAlertMessageForm] = useState({
    status: false,
    message: null as null | string,
  });

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/staff/verify",
        {
          nrp: formik.values.nrp,
          password: formik.values.password,
          confirmPassword: formik.values.confirmPassword,
          verification_code: formik.values.verification_code,
        }
      );

      if (response.data.status === "fail") {
        setAlertMessageForm({
          status: true,
          message: response.data.data.message,
        });
      }

      if (response.data.status === "success") {
        router.push("/staff/login");
        sweetAlert("success", "Verification is successful, you can login now");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      verification_code: "",
      nrp: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      verification_code: Yup.string().required(),
      nrp: Yup.number().typeError("NRP must be a number").required(),
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
            Verification Code
          </Typography>
          <CssTextField
            size="small"
            fullWidth
            name={"verification_code"}
            placeholder="verification code"
            autoComplete="off"
            value={formik.values.verification_code}
            onChange={formik.handleChange}
          />
          {formik.touched.verification_code &&
            formik.errors.verification_code && (
              <Typography
                variant="body2"
                style={{ color: "red", fontFamily: "Inter" }}
              >
                {formik.errors.verification_code}
              </Typography>
            )}
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography className={domine.className} variant="body2">
            Nrp
          </Typography>
          <CssTextField
            size="small"
            fullWidth
            name={"nrp"}
            placeholder="Your NRP"
            autoComplete="off"
            value={formik.values.nrp}
            onChange={formik.handleChange}
          />
          {formik.touched.nrp && formik.errors.nrp && (
            <Typography
              variant="body2"
              style={{ color: "red", fontFamily: "Inter" }}
            >
              {formik.errors.nrp}
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
