import { Navigate, Outlet } from "react-router";

export const PrivateRoute = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
