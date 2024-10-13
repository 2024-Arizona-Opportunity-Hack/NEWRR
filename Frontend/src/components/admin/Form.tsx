import React from "react";

interface FormProps {
  name: string;
  description: string;
  link: string;
}

const Form: React.FC<FormProps> = ({ name, description, link }) => {
  return (
    <div
      className="bg-darkestgreen shadow-md rounded p-4 cursor-pointer hover:bg-darkergreen transition h-full"
      onClick={() => (window.location.href = link)}
    >
      <h3 className="text-2xl font-bold text-wolfwhite mb-2">{name}</h3>
      <p className="text-wolfwhite">{description}</p>
    </div>
  );
};

export default Form;
