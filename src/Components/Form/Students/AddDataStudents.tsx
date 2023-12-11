import { Box, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import InputForm from "../../InputForm";
import ModalFormButton from "../../Button/ModalFormButton";
import axios from "axios";
import FormModal from "@/src/Layout/Modal";
import { useAlertMessage } from "@/src/Context/Alert/AlertContextProvider";
import { useDispatch } from "react-redux";
import { addDataStudent } from "@/src/Redux/Admin/StudentsDataSlice";

interface AddDataStudentsProps {
  open: boolean;
  handleClose: () => void;
  setVerificationCode: (code: string) => void;
}

export default function AddDataStudents({
  open,
  handleClose,
  setVerificationCode,
}: AddDataStudentsProps) {
  const { alertMessage, setAlertMessage } = useAlertMessage();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const getFormValue = {
        nim: formik.values.nim,
        name: formik.values.name,
        email: formik.values.email,
        entry_year: formik.values.entry_year,
        date_of_birth: formik.values.date_of_birth,
        address: formik.values.address,
        semester: formik.values.semester,
        major: formik.values.major,
        status: formik.values.status,
      };

      const response = await axios.post(
        "http://localhost:5000/api/addStudent",
        getFormValue
      );

      if (response.data.status === "success") {
        setVerificationCode(response.data.data.verificationCode);
        dispatch(addDataStudent(getFormValue));
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
      nim: "",
      name: "",
      email: "",
      entry_year: "",
      date_of_birth: "",
      address: "",
      semester: "",
      major: "",
      status: "",
    },

    validationSchema: Yup.object({
      nim: Yup.number().required(),
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      entry_year: Yup.number().min(1000).max(9999).required(),
      date_of_birth: Yup.date().required(),
      address: Yup.string().required(),
      semester: Yup.number().integer().min(1).max(9).required(),
      major: Yup.string().required(),
      status: Yup.string().required(),
    }),

    onSubmit: handleSubmit,
  });

  const clearDataForm = () => {
    return null;
  };

  return (
    <FormModal open={open} title="Create New Student">
      <form onSubmit={formik.handleSubmit}>
        <Grid display={"flex"} flexDirection={"column"} gap={3}>
          <InputForm
            title={"nim"}
            label={"Student Nim"}
            value={formik.values.nim}
            onchange={formik.handleChange}
            dataError={formik.errors.nim || ""}
            touched={formik.touched.nim || false}
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
            <Box width={"100%"}>
              <InputForm
                title={"entry_year"}
                label={"Entry Year"}
                value={formik.values.entry_year}
                onchange={formik.handleChange}
                dataError={formik.errors.entry_year || ""}
                touched={formik.touched.entry_year || false}
              />
            </Box>
            <Box width={"100%"}>
              <InputForm
                title={"status"}
                label={"Status"}
                select={true}
                dataSelect={["active", "not active", "graduated"]}
                value={formik.values.status}
                onchange={formik.handleChange}
                dataError={formik.errors.status || ""}
                touched={formik.touched.status || false}
              />
            </Box>
          </Grid>
          <Grid display={"flex"} justifyContent={"space-between"} gap={2}>
            <Box width={"100%"}>
              <InputForm
                title={"semester"}
                label={"Semester"}
                value={formik.values.semester}
                onchange={formik.handleChange}
                dataError={formik.errors.semester || ""}
                touched={formik.touched.semester || false}
              />
            </Box>
            <Box width={"100%"}>
              <InputForm
                title={"major"}
                label={"Major"}
                select={true}
                dataSelect={[
                  "information technology",
                  "informatics engineering",
                ]}
                value={formik.values.major}
                onchange={formik.handleChange}
                dataError={formik.errors.major || ""}
                touched={formik.touched.major || false}
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
