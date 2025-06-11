const Input = ({ label, type = "text", value, onChange, name, placeholder, required = false }) => (
  <div className="w-full mb-4">
    {label && <label className="block mb-1 font-medium text-gray-700">{label}</label>}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  </div>
);

export default Input;
