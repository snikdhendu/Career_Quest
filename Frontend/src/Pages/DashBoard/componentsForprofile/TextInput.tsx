import React from 'react';

interface TextInputProps {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  // required?:boolean;
  error?:string
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  value,
  placeholder,
  onChange,
  label,
  type = 'text',
  // required=false,
  error=''
}) => (
  <div className="flex flex-col w-full">
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`py-1 bg-white pl-2 border-2 border-gray-300 rounded-sm placeholder-black-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${error ? "border-red-600" : "border-gray-300"}`}
    />
    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
  </div>
);

export default TextInput;
