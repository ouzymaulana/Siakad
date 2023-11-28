"use client";
import React, { createContext, useContext, useState } from "react";

export const DataPage = createContext<{
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}>({
  page: 3,
  setPage: () => {},
});
export const useDataPagination = () => useContext(DataPage);

const PaginationContexProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [page, setPage] = useState(3);
  return (
    <DataPage.Provider value={{ page, setPage }}>{children}</DataPage.Provider>
  );
};

export default PaginationContexProvider;
