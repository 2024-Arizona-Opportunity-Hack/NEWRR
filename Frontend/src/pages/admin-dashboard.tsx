// admin page with log in and powerbi platform later

import React from "react";
import Navbar from "../components/Navbar";

const AdminDashboard: React.FC = () => {
  const adminLinks = [
    { name: "Financials", href: "/admin/financial-dashboard" },
    { name: "Animals", href: "/admin/animal-dashboard" },
    { name: "Forms", href: "/admin/forms-dashboard" },
  ];

  return (
    <div>
      <Navbar links={adminLinks} title="NEWRR Admin Dashboard" />
      {/* Admin page content */}
    </div>
  );
};

export default AdminDashboard;
