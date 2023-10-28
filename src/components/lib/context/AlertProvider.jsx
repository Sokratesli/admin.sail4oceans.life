import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export function useAlert() {
  return useContext(AlertContext);
}

export function AlertProvider({ children }) {
  const [alert, setAlert] = useState(null);
  const [alertType, setAlertType] = useState("success"); 

  const showAlert = (alertMessage, type) => {
    setAlert(alertMessage);
    setAlertType(type);
  };

  const clearAlert = () => {
    setAlert(null);
    setAlertType("success");
  };

  return (
    <AlertContext.Provider value={{ alert, alertType, showAlert, clearAlert }}>
      {children}
    </AlertContext.Provider>
  );
}