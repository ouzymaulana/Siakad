"use client";
import FloatingAddButton from "@/src/Components/Button/FloatingAddButton";
import AddDataStudents from "@/src/Components/Form/AddDataStudents";
import SnackbarsAlert from "@/src/Components/SnackBar";
import StickyHeadTable from "@/src/Components/Table";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function StudentManagementView() {
  const { setSelectMenu } = useDataSelectMenu();
  const [openModalAddStudents, setOpenModalAddStudents] = useState(false);
  const handleClose = () => setOpenModalAddStudents(false);
  const [dataUsers, setDataUsers] = useState([]);

  const openModalAddStudent = () => {
    setOpenModalAddStudents(true);
  };

  const getDataStudents = async () => {
    try {
      const dataStudents = await axios.get(
        "http://localhost:5000/api/students"
      );

      console.log("================1====================");
      console.log(typeof dataStudents.data);
      console.log(typeof dataStudents.data.data);
      console.log(typeof dataStudents.data.data.userData);
      console.log("====================================");

      if (dataStudents.data.data.userData) {
        setDataUsers(dataStudents.data.data.userData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataStudents();
    setSelectMenu("/admin/user-management/students");
  }, []);

  return (
    <>
      <StickyHeadTable dataUsers={dataUsers} />
      <FloatingAddButton handleClick={openModalAddStudent} />
      <AddDataStudents handleClose={handleClose} open={openModalAddStudents} />
      <SnackbarsAlert />
    </>
  );
}
