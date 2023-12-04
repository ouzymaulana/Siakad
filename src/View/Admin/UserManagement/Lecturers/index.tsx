"use client";
import FloatingAddButton from "@/src/Components/Button/FloatingAddButton";
import AddLecturer from "@/src/Components/Form/Lecturers/AddLecturer";
import SnackbarsAlert from "@/src/Components/SnackBar";
import StickyHeadTable from "@/src/Components/Table/New";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  const [dataUsers, setDataUsers] = useState([]);
  const [verificationCode, setVerificationCode] = useState("");

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const getDataLecturers = async () => {
    try {
      const dataLecturers = await axios.get(
        "http://localhost:5000/api/lecturers"
      );

      if (dataLecturers) {
        setDataUsers(dataLecturers.data.data.lecturersData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataLecturers();
    setSelectMenu("/admin/user-management/lecturers");
  }, []);

  interface UserData {
    id: number;
    nim: number;
    email: string;
    name: string;
    entry_year: number;
    date_of_birth: string;
    major: string;
    semester: number;
    status: string;
    [key: string]: string | number;
  }

  const columns: Column[] = [
    { label: "NRP", field: "nrp", minWidth: 170 },
    { label: "Name", field: "name", minWidth: 170 },
    { label: "Email", field: "email", minWidth: 170 },
    { label: "Date Of Birth", field: "date_of_birth", minWidth: 170 },
    { label: "address", field: "address", minWidth: 100 },
    { label: "Status", field: "status", minWidth: 80 },
    { label: "Verify", field: "isVerify", minWidth: 100 },
    { label: "role", field: "role", minWidth: 80 },
  ];

  return (
    <>
      <StickyHeadTable<UserData> dataUsers={dataUsers} columns={columns} />
      <FloatingAddButton handleClick={handleModal} />
      <AddLecturer
        handleClose={handleModal}
        open={openModal}
        setVerificationCode={setVerificationCode}
      />
      <SnackbarsAlert verification_code={verificationCode} />
    </>
  );
}
