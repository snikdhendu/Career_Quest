import React from 'react';

interface SelectInputProps {
  id: string;
  name: string;
  value: string;
  label:string;
  error?:string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

const SelectInput: React.FC<SelectInputProps> = ({
  id,
  name,
  value,
  label,
  onChange,
  options,
  error
}) => (
  <div className="w-full flex flex-col">
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`py-1 text-black-500 bg-white pl-2 border-2  rounded-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${error ? "border-red-600" : "border-gray-300"}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
  </div>
);

export default SelectInput;
