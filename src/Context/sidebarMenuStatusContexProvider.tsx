"use client";
import React, { createContext, useContext, useState } from "react";

export const DataSelectMenu = createContext<{
  selectMenu: string;
  setSelectMenu: React.Dispatch<React.SetStateAction<string>>;
}>({
  selectMenu: "",
  setSelectMenu: () => {},
});
export const useDataSelectMenu = () => useContext(DataSelectMenu);

const SidebarMenuStatusContexProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectMenu, setSelectMenu] = useState("");
  return (
    <DataSelectMenu.Provider value={{ selectMenu, setSelectMenu }}>
      {children}
    </DataSelectMenu.Provider>
  );
};

export default SidebarMenuStatusContexProvider;
