const ConditionTag = ({ label, severity = 'normal' }) => {
  const colors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800',
    normal: 'bg-gray-100 text-gray-800',
  };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colors[severity]}`}>
      {label}
    </span>
  );
};

export default ConditionTag;