import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const AccountContext = createContext(null);

const AccountProvider = () => {
  const [user, setUser] = useState(null);
  const [task, setTask] = useState([]);
  const [taskDetails, setTaskDetails] = useState({});

  return (
    <AccountContext.Provider
      value={{
        user,
        setUser,
        task,
        setTask,
        taskDetails,
        setTaskDetails,
      }}
    >
      <Outlet />
    </AccountContext.Provider>
  );
};

export default AccountProvider;
