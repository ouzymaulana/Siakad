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
import { updateDatalecturersAndStaff } from "@/src/Redux/Admin/LecturersAndStaffDataSlice";

export default function UpdateDataLecturer() {
  const { openActionTable, setOpenActionTable } = useActionModal();
  const { alertMessage, setAlertMessage } = useAlertMessage();
  const dispatch = useDispatch();

  const handleCloseUpdateMenu = () => {
    setOpenActionTable({
      ...openActionTable,
      isOpenUpdateDataLecture: false,
      data: null,
    });
  };

  const handleSubmit = async () => {
    try {
      const getFormValue = {
        id: openActionTable.data?.id,
        nrp: String(formik.values.nrp),
        name: formik.values.name,
        email: formik.values.email,
        date_of_birth: formik.values.date_of_birth,
        status: formik.values.status,
        role: formik.values.role,
      };
      const response = await axios.patch(
        "http://localhost:5000/api/update/lecturer",
        {
          nrp: formik.values.nrp,
          name: formik.values.name,
          email: formik.values.email,
          date_of_birth: formik.values.date_of_birth,
          status: formik.values.status,
          role: formik.values.role,
        },
        { params: { id: openActionTable.data?.id } }
      );

      if (response.data.status === "success") {
        dispatch(updateDatalecturersAndStaff(getFormValue));
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
      nrp: "",
      name: "",
      email: "",
      date_of_birth: "",
      status: "",
      role: "",
    },

    validationSchema: Yup.object({
      nrp: Yup.number().required(),
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      date_of_birth: Yup.date().required(),
      status: Yup.string().required(),
      role: Yup.string().required(),
    }),

    onSubmit: handleSubmit,
  });

  const clearDataForm = () => {
    return null;
  };

  useEffect(() => {
    formik.setValues({
      nrp: openActionTable.data?.nrp || "",
      name: openActionTable.data?.name || "",
      email: openActionTable.data?.email || "",
      date_of_birth: openActionTable.data?.date_of_birth || "",
      status: openActionTable.data?.status || "",
      role: openActionTable.data?.role || "",
    });
  }, [openActionTable]);
  return (
    <ModalLayout
      open={openActionTable.isOpenUpdateDataLecture}
      title="update data lecturer"
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid display={"flex"} flexDirection={"column"} gap={3}>
          <InputForm
            title={"nrp"}
            label={"Student nrp"}
            value={formik.values.nrp}
            onchange={formik.handleChange}
            dataError={formik.errors.nrp || ""}
            touched={formik.touched.nrp || false}
          />
          <InputForm
            title={"name"}
            label={"Name"}
            value={formik.values.name}
            onchange={formik.handleChange}
            dataError={formik.errors.name || ""}
            touched={formik.touched.name || false}
          />
          <InputForm
            title={"email"}
            label={"Email"}
            value={formik.values.email}
            onchange={formik.handleChange}
            dataError={formik.errors.email || ""}
            touched={formik.touched.email || false}
          />
          <InputForm
            title={"role"}
            label={"role"}
            select={true}
            dataSelect={["admin", "lecturer"]}
            value={formik.values.role}
            onchange={formik.handleChange}
            dataError={formik.errors.role || ""}
            touched={formik.touched.role || false}
          />
          <Grid display={"flex"} justifyContent={"space-between"} gap={2}>
            <Box width={"100%"}>
              <InputForm
                title={"date_of_birth"}
                label={"birthday"}
                value={formik.values.date_of_birth}
                onchange={formik.handleChange}
                dataError={formik.errors.date_of_birth || ""}
                touched={formik.touched.date_of_birth || false}
              />
            </Box>
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
