"use client";
import FloatingAddButton from "@/src/Components/Button/FloatingAddButton";
import AddLecturer from "@/src/Components/Form/Lecturers/AddLecturer";
import UpdateDataLecturer from "@/src/Components/Form/Lecturers/UpdateDataLecturer";
import SnackbarsAlert from "@/src/Components/SnackBar";
import StickyHeadTable from "@/src/Components/Table/ReusableTable";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import {
  selectDatalecturersAndStaff,
  setDataLecturersAndStaff,
} from "@/src/Redux/Admin/LecturersAndStaffDataSlice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface Column {
  label: string;
  field: string;
  minWidth?: number;
  align?: "right" | "center";
  format?: (value: number) => string;
}

export default function LecturersManagementView() {
  const { setSelectMenu } = useDataSelectMenu();
  const [openModal, setOpenModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const dataLecturersAndStaff = useSelector(selectDatalecturersAndStaff);
  const dispatch = useDispatch();

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const getDataLecturers = async () => {
    try {
      const dataLecturers = await axios.get(
        "http://localhost:5000/api/lecturers"
      );

      if (dataLecturers) {
        dispatch(
          setDataLecturersAndStaff(dataLecturers.data.data.lecturersData)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataLecturers();
    setSelectMenu("/admin/user-management/lecturers");
  }, []);

  useEffect(() => {
    dispatch(setDataLecturersAndStaff(dataLecturersAndStaff));
  }, [dataLecturersAndStaff]);

  const columns: Column[] = [
    { label: "NRP", field: "nrp", minWidth: 170 },
    { label: "Name", field: "name", minWidth: 170 },
    { label: "Email", field: "email", minWidth: 170 },
    { label: "Date Of Birth", field: "date_of_birth", minWidth: 170 },
    // { label: "address", field: "address", minWidth: 100 },
    { label: "Status", field: "status", minWidth: 80 },
    { label: "Verify", field: "isVerify", minWidth: 100 },
    { label: "role", field: "role", minWidth: 80 },
    { label: "Action", field: "action", minWidth: 50 },
  ];

  return (
    <>
      <StickyHeadTable dataUsers={dataLecturersAndStaff} columns={columns} />
      <FloatingAddButton handleClick={handleModal} />
      <AddLecturer
        handleClose={handleModal}
        open={openModal}
        setVerificationCode={setVerificationCode}
      />
      <UpdateDataLecturer />
      <SnackbarsAlert verification_code={verificationCode} />
    </>
  );
}
