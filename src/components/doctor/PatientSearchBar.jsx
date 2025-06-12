const PatientSearchBar = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search patients..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="border p-2 w-full rounded focus:outline-blue-400"
  />
);

export default PatientSearchBar;
