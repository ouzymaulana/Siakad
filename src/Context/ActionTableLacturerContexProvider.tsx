"use client";
import React, { createContext, useContext, useState } from "react";
interface ActionTableLectureContextProps {
  openActionTableLecture: {
    isOpenUpdateDataLecture: boolean;
    data: null | LecturerDataContext;
  };
  setOpenActionTableLecture: React.Dispatch<
    React.SetStateAction<{
      isOpenUpdateDataLecture: boolean;
      data: null | LecturerDataContext;
    }>
  >;
}

interface LecturerDataContext {
  // id: string;
  nrp: string;
  name: string;
  email: string;
  date_of_birth: string;
  status: string;
  role: string;
  [key: string]: string | number;
}

export const ActionTableLecturer = createContext<
  ActionTableLectureContextProps | undefined
>(undefined);
// export const useActionModal = () => useContext(ActionTable);
export const useActionModalLectureTable = () => {
  const context = useContext(ActionTableLecturer);
  if (!context) {
    throw new Error(
      "useActionModalLectureTable must be used within an ActionTableProvider"
    );
  }
  return context;
};

const ActionTableLecturerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openActionTableLecture, setOpenActionTableLecture] = useState({
    isOpenUpdateDataLecture: false,
    data: null as null | LecturerDataContext,
  });
  return (
    <ActionTableLecturer.Provider
      value={{ openActionTableLecture, setOpenActionTableLecture }}
    >
      {children}
    </ActionTableLecturer.Provider>
  );
};

export default ActionTableLecturerContextProvider;
