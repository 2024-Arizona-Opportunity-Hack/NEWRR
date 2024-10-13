import React from "react";

interface FormProps {
  name: string;
  description: string;
  link: string;
}

// Component for rendering a form tile
const Form: React.FC<FormProps> = ({ name, description, link }) => {
  return (
    <div
      className="bg-darkestgreen shadow-md rounded p-4 cursor-pointer hover:bg-darkergreen transition h-full"
      onClick={() => (window.location.href = link)}
    >
      <h3 className="font-['Montserrat'] text-2xl font-bold text-wolfwhite mb-2">
        {name}
      </h3>
      <p className="font-['Outfit'] text-wolfwhite">{description}</p>
    </div>
  );
};

export default Form;
