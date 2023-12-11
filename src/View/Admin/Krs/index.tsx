"use client";

import FloatingAddButton from "@/src/Components/Button/FloatingAddButton";
import AddKrs from "@/src/Components/Form/Krs/AddKrs";
import UpdateKrs from "@/src/Components/Form/Krs/UpdateKrs";
import SnackbarsAlert from "@/src/Components/SnackBar";
import KrsManagementTable from "@/src/Components/Table/Krs/KrsManagementTable";
import { useDataSelectMenu } from "@/src/Context/sidebarMenuStatusContexProvider";
import { selectDataKrs, setDataKrs } from "@/src/Redux/Admin/KrsDataSlice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AdminKrsView() {
  const { setSelectMenu } = useDataSelectMenu();
  const dataKrs = useSelector(selectDataKrs);
  const [openModalAddKrs, setOpenModalAddKrs] = useState(false);
  const handleClose = () => setOpenModalAddKrs(false);
  const dispatch = useDispatch();

  const handleOpenModalAddKrs = () => {
    setOpenModalAddKrs(true);
  };

  const getDataKrs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/krs");

      console.log(response.data);

      if (response.data.data.krsData) {
        dispatch(setDataKrs(response.data.data.krsData));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataKrs();
    setSelectMenu("admin/krs");
  }, []);

  useEffect(() => {
    dispatch(setDataKrs(dataKrs));
  }, [dataKrs]);
  return (
    <>
      <KrsManagementTable dataKrs={dataKrs} />
      <FloatingAddButton handleClick={handleOpenModalAddKrs} />
      <AddKrs handleClose={handleClose} open={openModalAddKrs} />
      <SnackbarsAlert verification_code={""} />
      <UpdateKrs />
    </>
  );
}
