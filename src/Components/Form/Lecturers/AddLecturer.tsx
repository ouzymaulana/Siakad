import { Box, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import InputForm from "../../InputForm";
import ModalFormButton from "../../Button/ModalFormButton";
import axios from "axios";
import FormModal from "@/src/Layout/Modal";
import { useAlertMessage } from "@/src/Context/Alert/AlertContextProvider";

interface AddDataStudentsProps {
  open: boolean;
  handleClose: () => void;
  setVerificationCode: (code: string) => void;
}

export default function AddLecturer({
  open,
  handleClose,
  setVerificationCode,
}: AddDataStudentsProps) {
  const { alertMessage, setAlertMessage } = useAlertMessage();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/addLecturer",
        {
          nrp: formik.values.nrp,
          name: formik.values.name,
          email: formik.values.email,
          date_of_birth: formik.values.date_of_birth,
          address: formik.values.address,
          status: formik.values.status,
          role: formik.values.role,
        }
      );

      if (response.data.status === "success") {
        setVerificationCode(response.data.data.verificationCode);
        handleClose();
        setAlertMessage({
          ...alertMessage,
          isOpen: true,
          message: "Successfully added student data",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    // setting initial values
    initialValues: {
      nrp: "",
      name: "",
      email: "",
      date_of_birth: "",
      address: "",
      status: "",
      role: "",
    },

    validationSchema: Yup.object({
      nrp: Yup.number().required(),
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      date_of_birth: Yup.date().required(),
      address: Yup.string().required(),
      status: Yup.string().required(),
      role: Yup.string().required(),
    }),

    onSubmit: handleSubmit,
  });

  const clearDataForm = () => {
    return null;
  };

  return (
    <FormModal open={open} title="Create New Lecturer">
      <form onSubmit={formik.handleSubmit}>
        <Grid display={"flex"} flexDirection={"column"} gap={3}>
          <InputForm
            title={"nrp"}
            label={"Student NRP"}
            value={formik.values.nrp}
            onchange={formik.handleChange}
            dataError={formik.errors.nrp || ""}
            touched={formik.touched.nrp || false}
          />
          <InputForm
            title={"name"}
            label={"Student Name"}
            value={formik.values.name}
            onchange={formik.handleChange}
            dataError={formik.errors.name || ""}
            touched={formik.touched.name || false}
          />
          <Grid display={"flex"} justifyContent={"space-between"} gap={2}>
            <Box width={"100%"}>
              <InputForm
                title={"email"}
                label={"Student Email"}
                value={formik.values.email}
                onchange={formik.handleChange}
                dataError={formik.errors.email || ""}
                touched={formik.touched.email || false}
              />
            </Box>
            <Box width={"100%"}>
              <InputForm
                dateType={true}
                title={"date_of_birth"}
                label={"Date Of Birth"}
                value={formik.values.date_of_birth}
                onchange={formik.handleChange}
                dataError={formik.errors.date_of_birth || ""}
                touched={formik.touched.date_of_birth || false}
              />
            </Box>
          </Grid>
          <Grid display={"flex"} justifyContent={"space-between"} gap={2}>
            {/* sendiri */}
            <Box width={"100%"}>
              <InputForm
                title={"status"}
                label={"Status"}
                select={true}
                dataSelect={[
                  "asisten ahli",
                  "lektor",
                  "lektor kepala",
                  "profesor",
                ]}
                value={formik.values.status}
                onchange={formik.handleChange}
                dataError={formik.errors.status || ""}
                touched={formik.touched.status || false}
              />
            </Box>
            <Box width={"100%"}>
              <InputForm
                title={"role"}
                label={"role"}
                select={true}
                dataSelect={["admin", "lecturer"]}
                value={formik.values.role}
                onchange={formik.handleChange}
                dataError={formik.errors.status || ""}
                touched={formik.touched.status || false}
              />
            </Box>
          </Grid>

          <InputForm
            title={"address"}
            label={"Address"}
            value={formik.values.address}
            onchange={formik.handleChange}
            dataError={formik.errors.address || ""}
            touched={formik.touched.address || false}
          />
        </Grid>
        <ModalFormButton
          disable={false}
          handleClose={handleClose}
          resetInput={clearDataForm}
        />
      </form>
    </FormModal>
  );
}
