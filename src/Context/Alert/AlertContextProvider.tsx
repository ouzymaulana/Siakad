"use client";
import React, { createContext, useContext, useState } from "react";

interface AlertMessageContextProps {
  alertMessage: { isOpen: boolean; message: null | string };
  setAlertMessage: React.Dispatch<
    React.SetStateAction<{ isOpen: boolean; message: null | string }>
  >;
}

export const AlertMessage = createContext<AlertMessageContextProps | undefined>(
  undefined
);
export const useAlertMessage = () => {
  const context = useContext(AlertMessage);
  if (!context) {
    throw new Error(
      "useAlertMessage must be used within an AlertMessageProvider"
    );
  }
  return context;
};

const AlertMessageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [alertMessage, setAlertMessage] = useState({
    isOpen: false,
    message: null as null | string,
  });

  return (
    <AlertMessage.Provider value={{ alertMessage, setAlertMessage }}>
      {children}
    </AlertMessage.Provider>
  );
};

export default AlertMessageContextProvider;
