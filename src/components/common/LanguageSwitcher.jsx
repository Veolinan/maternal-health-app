import { useState } from 'react';

const LanguageSwitcher = () => {
  const [lang, setLang] = useState('en');

  const handleChange = (e) => {
    setLang(e.target.value);
    // Add logic to update app language (e.g., i18n)
  };

  return (
    <select
      value={lang}
      onChange={handleChange}
      className="border rounded px-2 py-1 text-sm text-gray-700 bg-white hover:border-blue-400 focus:outline-none"
    >
      <option value="en">EN</option>
      <option value="sw">SW</option>
    </select>
  );
};

export default LanguageSwitcher;