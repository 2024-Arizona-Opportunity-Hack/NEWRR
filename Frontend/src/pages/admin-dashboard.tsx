// admin page with log in and powerbi platform later

import React from "react";
import Navbar from "../components/Navbar";
import TaskManagement from "../components/TaskManagement";
import AdminManagement from "../components/AdminManagement";
import { useUser } from "../hooks/useUser";
import NotLoggedIn from "../components/NotLoggedIn";

const AdminDashboard: React.FC = () => {
  const { data: user } = useUser();
  
  const hasPerms = () => {
    console.log(user);
    if(!user || !user.data) return false;
    return user.data.role.perm_level > 5;
  }

  const hasAccess = hasPerms();

  const adminLinks = [
    { name: "Financial Dashboard", href: "/admin/financial-dashboard" },
    { name: "Animal Dashboard", href: "/admin/animal-dashboard" },
    { name: "Forms Dashboard", href: "/admin/forms-dashboard" },
  ];

  if(!user) return <NotLoggedIn hasUser={false}/>;
  if(!hasAccess) return <NotLoggedIn hasUser={true}/>;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar links={adminLinks} title="NEWRR Admin Dashboard" />
      <div className="flex-1 flex flex-col md:flex-row justify-center items-stretch p-4 mt-16 mx-4">
        <div className="flex-1 md:w-3/4 p-2">
          <TaskManagement />
        </div>
        <div className="md:w-1/4 p-2">
          <AdminManagement />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
