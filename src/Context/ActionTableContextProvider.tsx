"use client";
import React, { createContext, useContext, useState } from "react";
interface ActionTableContextProps {
  openActionTable: {
    isOpenUpdateData: boolean;
    isOpenUpdateDataLecture: boolean;
    isOpenUpdateKrs: boolean;
    data: null | any;
    // data: null | UserDataContext | LecturerDataContext | KrsDataContext;
  };
  setOpenActionTable: React.Dispatch<
    React.SetStateAction<{
      isOpenUpdateData: boolean;
      isOpenUpdateDataLecture: boolean;
      isOpenUpdateKrs: boolean;
      data: null | any;
      // data: null | UserDataContext | LecturerDataContext | KrsDataContext;
    }>
  >;
}

interface UserDataContext {
  id: string;
  nim: string;
  email: string;
  name: string;
  entry_year: string;
  date_of_birth: string;
  major: string;
  semester: string;
  status: string;
  [key: string]: string | number;
}

interface LecturerDataContext {
  id: string;
  nrp: any;
  email: string;
  name: string;
  date_of_birth: string;
  status: string;
  role: string;
  [key: string]: string | number;
}
interface KrsDataContext {
  id: string;
  course: string;
  lecturer: string;
  prodi: string;
  semester: string;
  kuota: string;
  [key: string]: string | number;
}

export const ActionTable = createContext<ActionTableContextProps | undefined>(
  undefined
);
// export const useActionModal = () => useContext(ActionTable);
export const useActionModal = () => {
  const context = useContext(ActionTable);
  if (!context) {
    throw new Error(
      "useActionModal must be used within an ActionTableProvider"
    );
  }
  return context;
};

const ActionTableContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openActionTable, setOpenActionTable] = useState({
    isOpenUpdateData: false,
    isOpenUpdateDataLecture: false,
    isOpenUpdateKrs: false,
    data: null as null | UserDataContext | LecturerDataContext | KrsDataContext,
    // data: null as null | UserDataContext | LecturerDataContext | KrsDataContext,
  });
  return (
    <ActionTable.Provider value={{ openActionTable, setOpenActionTable }}>
      {children}
    </ActionTable.Provider>
  );
};

export default ActionTableContextProvider;
