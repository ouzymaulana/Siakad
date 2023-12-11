import { Box, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import InputForm from "../../InputForm";
import ModalFormButton from "../../Button/ModalFormButton";
import axios from "axios";
import FormModal from "@/src/Layout/Modal";
import { useAlertMessage } from "@/src/Context/Alert/AlertContextProvider";
import { useDispatch } from "react-redux";
import { updateDataKrs } from "@/src/Redux/Admin/KrsDataSlice";
import { useActionModal } from "@/src/Context/ActionTableContextProvider";

export default function UpdateKrs() {
  const { openActionTable, setOpenActionTable } = useActionModal();
  const { alertMessage, setAlertMessage } = useAlertMessage();
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setOpenActionTable({
      ...openActionTable,
      isOpenUpdateKrs: false,
      data: null,
    });
  };

  const handleSubmit = async () => {
    try {
      const getFormValue = {
        course: formik.values.course,
        lecturer: formik.values.lecturer,
        prodi: formik.values.prodi,
        semester: formik.values.semester,
        kuota: formik.values.kuota,
      };
      const response = await axios.patch(
        "http://localhost:5000/api/krs/update",
        getFormValue,
        { params: { id: openActionTable.data?.id } }
      );

      if (response.data.status === "success") {
        const updateFormValue = {
          ...getFormValue,
          id: openActionTable.data?.id,
        };
        handleCloseModal();
        dispatch(updateDataKrs(updateFormValue));
        setAlertMessage({
          ...alertMessage,
          isOpen: true,
          message: "Successfully updated KRS data",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      course: "",
      lecturer: "",
      prodi: "",
      semester: "",
      kuota: "",
    },

    validationSchema: Yup.object({
      course: Yup.string().required(),
      lecturer: Yup.string().required(),
      prodi: Yup.string().required(),
      semester: Yup.number().integer().min(1).max(9).required(),
      kuota: Yup.number().required(),
    }),

    onSubmit: handleSubmit,
  });

  const clearDataForm = () => {
    return null;
  };

  useEffect(() => {
    formik.setValues({
      course: openActionTable.data?.course || "",
      lecturer: openActionTable.data?.lecturer || "",
      prodi: openActionTable.data?.prodi || "",
      semester: openActionTable.data?.semester || "",
      kuota: openActionTable.data?.kuota || "",
    });
  }, [openActionTable]);

  return (
    <FormModal
      open={openActionTable.isOpenUpdateKrs}
      title="Create New Lecturer"
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid display={"flex"} flexDirection={"column"} gap={3}>
          <InputForm
            title={"course"}
            label={"Course Name"}
            value={formik.values.course}
            onchange={formik.handleChange}
            dataError={formik.errors.course || ""}
            touched={formik.touched.course || false}
          />
          <InputForm
            title={"lecturer"}
            label={"Lecturer Name"}
            value={formik.values.lecturer}
            onchange={formik.handleChange}
            dataError={formik.errors.lecturer || ""}
            touched={formik.touched.lecturer || false}
          />
          <Box width={"100%"}>
            <InputForm
              title={"prodi"}
              label={"Study Program"}
              select={true}
              dataSelect={["information technology", "informatics engineering"]}
              value={formik.values.prodi}
              onchange={formik.handleChange}
              dataError={formik.errors.prodi || ""}
              touched={formik.touched.prodi || false}
            />
          </Box>
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
                title={"kuota"}
                label={"kuota"}
                value={formik.values.kuota}
                onchange={formik.handleChange}
                dataError={formik.errors.kuota || ""}
                touched={formik.touched.kuota || false}
              />
            </Box>
          </Grid>
        </Grid>
        <ModalFormButton
          disable={false}
          handleClose={handleCloseModal}
          resetInput={clearDataForm}
        />
      </form>
    </FormModal>
  );
}
