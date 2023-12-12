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
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useRouter } from "next/navigation";

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

export default function StaffLoginView() {
  const [showPassword, setShowPassword] = useState(false);
  const { alertForm, setAlertForm } = useAlertForm();
  const route = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login/staff",
        {
          nrp: formik.values.nrp,
          password: formik.values.password,
        }
      );

      if (response.data.status === "fail") {
        setAlertForm({
          isOpen: true,
          message: response.data.data.message,
          status: "error",
        });
      }

      if (response.data.status === "success") {
        route.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      nrp: "",
      password: "",
    },

    validationSchema: Yup.object({
      nrp: Yup.number().typeError("NRP must be a number").required(),
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
            Nrp
          </Typography>
          <CssTextField
            fullWidth
            size="small"
            name={"nrp"}
            placeholder="Your Nrp"
            autoComplete="off"
            value={formik.values.nrp}
            onChange={formik.handleChange}
          />
          {formik.touched.nrp && formik.errors.nrp && (
            <span style={{ color: "red", fontFamily: "Inter" }}>
              {formik.errors.nrp}
            </span>
          )}
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography className={domine.className}>Password</Typography>
          <Box position={"relative"}>
            <CssTextField
              fullWidth
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
          size="medium"
          variant="contained"
          sx={{
            fontSize: "0.7em",
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
            <Link href={"/staff/verification"} style={{ color: "#9852C3" }}>
              Verify
            </Link>
          </Typography>
        </Box>
      </form>
    </>
  );
}
