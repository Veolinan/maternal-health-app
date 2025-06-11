import { useContext } from "react";
import { RoleContext } from "../../context/RoleProvider";

const RoleSwitcher = () => {
  const { role, setRole } = useContext(RoleContext);

  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      <option value="admin">Admin</option>
      <option value="doctor">Doctor</option>
      <option value="patient">Patient</option>
    </select>
  );
};

export default RoleSwitcher;
// This component allows users to switch roles between Admin, Doctor, and Patient.
// It uses the RoleContext to manage the current role state.