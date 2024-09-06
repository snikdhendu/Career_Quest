import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="font-extrabold bg-SmallHeading px-8 py-2 h-fit relative text-black rounded-md border-SmallHeading cursor-pointer text-sm hover:bg-blue-500 hover:text-white border-2 border-gray-300"
  >
    {label}
  </button>
);

export default Button;
