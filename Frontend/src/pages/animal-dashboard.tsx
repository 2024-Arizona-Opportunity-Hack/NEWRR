// admin page with log in and powerbi platform later

import React from "react";
import Navbar from "../components/Navbar";

const AnimalDashboard: React.FC = () => {
  const adminLinks = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Animal Dashboard", href: "/admin/animal-dashboard" },
    { name: "Forms Dashboard", href: "/admin/forms-dashboard" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar links={adminLinks} title="NEWRR Animal Dashboard" />
      <div className="flex-1 flex flex-col md:flex-row justify-center items-stretch p-4 mt-16 mx-4"></div>
    </div>
  );
};

export default AnimalDashboard;
