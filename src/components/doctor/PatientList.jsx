import { useState } from 'react';
import PatientSearchBar from './PatientSearchBar';
import { usePatients } from '../../features/patients/usePatients';

const PatientList = () => {
  const { patients } = usePatients();
  const [search, setSearch] = useState('');

  const filtered = patients.filter((p) =>
    p.full_name.toLowerCase().includes(search.toLowerCase()) ||
    p.code.includes(search)
  );

  return (
    <div className="space-y-4">
      <PatientSearchBar value={search} onChange={setSearch} />
      <ul className="divide-y">
        {filtered.map((p) => (
          <li
            key={p.id}
            className="py-2 flex justify-between items-center hover:bg-gray-50 rounded px-2"
          >
            <span>{p.full_name} — <span className="font-mono">{p.code}</span></span>
            <a href={`/doctor/patients/${p.id}`} className="text-blue-600 hover:underline">View</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
