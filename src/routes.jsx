// routes.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import DoctorLayout from "./layouts/DoctorLayout";
import PatientLayout from "./layouts/PatientLayout";
import Login from "./pages/auth/Login";
import EnterCode from "./pages/patient/EnterCode";
// ... import others
import { useAuth } from "./hooks/useAuth";

export default function AppRoutes() {
  const { user, role } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {user && role === "admin" && (
          <Route path="/admin/*" element={<AdminLayout />} />
        )}
        {user && role === "doctor" && (
          <Route path="/doctor/*" element={<DoctorLayout />} />
        )}
        <Route path="/patient/*" element={<PatientLayout />} />
        <Route path="*" element={<Navigate to={user ? `/${role}` : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}
