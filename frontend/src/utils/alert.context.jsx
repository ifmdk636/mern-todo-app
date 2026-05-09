import { createContext } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  return (
    <AlertContext.Provider value={[alert, setAlert]}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
