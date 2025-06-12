const RoleBadge = ({ role }) => {
  const color = ({ admin: 'bg-red-500', doctor: 'bg-green-500' }[role] || 'bg-gray-500');
  return <span className={`${color} text-white px-2 py-1 rounded-full text-xs`}>{role}</span>;
};

export default RoleBadge;