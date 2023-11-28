"use client";
import React, { createContext, useContext, useState } from "react";

interface AlertFormContextProps {
  alertForm: { isOpen: boolean; message: null | string; status: string | null };
  setAlertForm: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      message: null | string;
      status: string | null;
    }>
  >;
}

export const AlertForm = createContext<AlertFormContextProps | undefined>(
  undefined
);
export const useAlertForm = () => {
  const context = useContext(AlertForm);
  if (!context) {
    throw new Error("useAlertForm must be used within an AlertFormProvider");
  }
  return context;
};

const AlertFormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [alertForm, setAlertForm] = useState({
    isOpen: false,
    message: null as null | string,
    status: null as string | null,
  });

  return (
    <AlertForm.Provider value={{ alertForm, setAlertForm }}>
      {children}
    </AlertForm.Provider>
  );
};

export default AlertFormContextProvider;
