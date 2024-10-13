// admin page with log in and powerbi platform later

import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/form";

const FormsDashboard: React.FC = () => {
  const adminLinks = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Animal Dashboard", href: "/admin/animal-dashboard" },
    { name: "Financial Dashboard", href: "/admin/financial-dashboard" },
  ];

  return (
    <div>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar links={adminLinks} title="NEWRR Forms Dashboard" />
        <div className="flex-1 flex flex-row items-stretch p-4 mt-16 mx-4">
          <Form name={"Test"} description={"Test"} link={""} />
        </div>
      </div>
    </div>
  );
};

export default FormsDashboard;
