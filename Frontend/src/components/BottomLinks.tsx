// src/components/BottomLinks.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BottomLinks: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-around p-4">
      <div className="w-1/3 m-2 p-4 text-center relative">
        <button
          onClick={() => navigate("/admin/financial-dashboard")}
          className="font-['Montserrat'] w-full bg-darkestgreen text-white py-2 rounded hover:bg-darkergreen"
        >
          Financial Dashboard
        </button>
      </div>
      <div className="w-1/3 m-2 p-4 text-center relative">
        <button
          onClick={() => navigate("/admin/animal-dashboard")}
          className=" font-['Montserrat'] w-full bg-darkestgreen text-white py-2 rounded hover:bg-darkergreen"
        >
          Animal Dashboard
        </button>
      </div>

      <div className="w-1/3 m-2 p-4 text-center relative">
        <button
          onClick={toggleDropdown}
          className="font-['Montserrat'] w-full bg-darkestgreen text-white py-2 rounded hover:bg-darkergreen"
        >
          Forms
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded">
            <ul className="text-left">
              <li className="p-2 hover:bg-gray-100 border-b">
                <a href="https://form.jotform.com/242856634248061">
                  Check-in Form
                </a>
              </li>
              <li className="p-2 hover:bg-gray-100 border-b">
                <a href="/checkout-form">Check-out Form</a>
              </li>
              <li className="p-2 hover:bg-gray-100 border-b">
                <a href="https://form.jotform.com/242856687555070">
                  Intake Form
                </a>
              </li>
              <li className="p-2 hover:bg-gray-100">
                <a href="https://form.jotform.com/242855970936168">
                  Adoption Form
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomLinks;
