import React from "react";

interface FormProps {
  name: string;
  description: string;
  link: string;
}

const Form: React.FC<FormProps> = ({ name, description, link }) => {
  return (
    <div
      className="bg-white shadow-md rounded p-4 mb-4 cursor-pointer hover:bg-gray-100 transition"
      onClick={() => (window.location.href = link)}
    >
      <h3 className="text-lg font-bold text-darkestgreen">{name}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Form;
