import { useContext } from "react";
import { AccountContext } from "../Context";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user } = useContext(AccountContext);
  return user ? <Outlet /> : <Navigate to="/login" />;
};
