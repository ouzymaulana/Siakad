"use client";
import FloatingAddButton from "@/src/Components/Button/FloatingAddButton";
import AddDataStudents from "@/src/Components/Form/Students/AddDataStudents";
import UpdateDataStudent from "@/src/Components/Form/Students/UpdateDataStudent";
import SnackbarsAlert from "@/src/Components/SnackBar";
import StickyHeadTable from "@/src/Components/Table";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import {
  selectDataStudents,
  setDataStudents,
} from "@/src/Redux/Admin/StudentsDataSlice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function StudentManagementView() {
  const dispatch = useDispatch();
  const { setSelectMenu } = useDataSelectMenu();
  const [openModalAddStudents, setOpenModalAddStudents] = useState(false);
  const handleClose = () => setOpenModalAddStudents(false);
  const [verificationCode, setVerificationCode] = useState("");
  const dataUser = useSelector(selectDataStudents);

  const openModalAddStudent = () => {
    setOpenModalAddStudents(true);
  };

  const getDataStudents = async () => {
    try {
      const dataStudents = await axios.get(
        "http://localhost:5000/api/students"
      );

      if (dataStudents.data.data.userData) {
        dispatch(setDataStudents(dataStudents.data.data.userData));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataStudents();
    setSelectMenu("/admin/user-management/students");
  }, []);

  useEffect(() => {
    dispatch(setDataStudents(dataUser));
  }, [dataUser]);

  return (
    <>
      <StickyHeadTable dataUsers={dataUser} />
      <FloatingAddButton handleClick={openModalAddStudent} />
      <AddDataStudents
        handleClose={handleClose}
        open={openModalAddStudents}
        setVerificationCode={setVerificationCode}
      />
      <SnackbarsAlert verification_code={verificationCode} />
      <UpdateDataStudent />
    </>
  );
}
