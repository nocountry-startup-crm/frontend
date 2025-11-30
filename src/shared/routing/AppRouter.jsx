import { Route, Routes } from "react-router";
import { Login } from "../../features/login/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PrivateLayout } from "../layouts/PrivateLayout";
import { Dashboard } from "../../features/dashboard/Dashboard";
import { Contacts } from "../../features/contacts/Contacts";
import { Conversations } from "../../features/conversations/Conversations";
import { Tasks } from "../../features/tasks/Tasks";
import { Analytics } from "../../features/analytics/Analytics";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/management" element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="conversations" element={<Conversations />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Route>
    </Routes>
  );
};
