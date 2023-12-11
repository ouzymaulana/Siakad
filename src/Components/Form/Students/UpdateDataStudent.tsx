import React, { useEffect } from "react";
import ModalLayout from "../../Modal/ModalLayout";
import { Box, Grid } from "@mui/material";
import { useActionModal } from "@/src/Context/ActionTableContextProvider";
import InputForm from "../../InputForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import ModalFormButton from "../../Button/ModalFormButton";
import axios from "axios";
import { useAlertMessage } from "@/src/Context/Alert/AlertContextProvider";
import { useDispatch } from "react-redux";
import { updateDataStudent } from "@/src/Redux/Admin/StudentsDataSlice";

export default function UpdateDataStudent() {
  const { openActionTable, setOpenActionTable } = useActionModal();
  const { alertMessage, setAlertMessage } = useAlertMessage();
  const dispatch = useDispatch();

  const handleCloseUpdateMenu = () => {
    setOpenActionTable({
      ...openActionTable,
      isOpenUpdateData: false,
      data: null,
    });
  };

  const handleSubmit = async () => {
    try {
      const getFormValue = {
        id: openActionTable.data?.id,
        nim: formik.values.nim,
        entry_year: formik.values.entry_year,
        semester: formik.values.semester,
        major: formik.values.major,
        status: formik.values.status,
      };
      const response = await axios.patch(
        "http://localhost:5000/api/updateStudent",
        {
          nim: formik.values.nim,
          entry_year: formik.values.entry_year,
          semester: formik.values.semester,
          major: formik.values.major,
          status: formik.values.status,
        },
        { params: { id: openActionTable.data?.id } }
      );

      if (response.data.status === "success") {
        dispatch(updateDataStudent(getFormValue));
        handleCloseUpdateMenu();
        setAlertMessage({
          ...alertMessage,
          isOpen: true,
          message: "Successfully update student data",
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
      entry_year: "",
      semester: "",
      major: "",
      status: "",
    },

    validationSchema: Yup.object({
      nim: Yup.number().required(),
      entry_year: Yup.number().min(1000).max(9999).required(),
      semester: Yup.number().integer().min(1).max(9).required(),
      major: Yup.string().required(),
      status: Yup.string().required(),
    }),

    onSubmit: handleSubmit,
  });

  const clearDataForm = () => {
    return null;
  };

  useEffect(() => {
    formik.setValues({
      nim: openActionTable.data?.nim || "",
      entry_year: openActionTable.data?.entry_year || "",
      semester: openActionTable.data?.semester || "",
      major: openActionTable.data?.major || "",
      status: openActionTable.data?.status || "",
    });
  }, [openActionTable]);
  return (
    <ModalLayout
      open={openActionTable.isOpenUpdateData}
      title="update data student"
    >
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
            title={"entry_year"}
            label={"Entry Year"}
            value={formik.values.entry_year}
            onchange={formik.handleChange}
            dataError={formik.errors.entry_year || ""}
            touched={formik.touched.entry_year || false}
          />
          <InputForm
            title={"major"}
            label={"Major"}
            select={true}
            dataSelect={["information technology", "informatics engineering"]}
            value={formik.values.major}
            onchange={formik.handleChange}
            dataError={formik.errors.major || ""}
            touched={formik.touched.major || false}
          />
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
        </Grid>
        <ModalFormButton
          disable={false}
          handleClose={handleCloseUpdateMenu}
          resetInput={clearDataForm}
        />
      </form>
    </ModalLayout>
  );
}
