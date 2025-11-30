import { Navigate } from "react-router";

export const Login = () => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to="/management" />;
  }

  return <h1>Login</h1>;
};
