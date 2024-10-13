import React from "react";
import AnimalManagement from "../components/admin/AnimalManagament";
import TaskManagement from "../components/admin/TaskManagement";
import Navbar from "../components/Navbar";
// import { useUser } from "../hooks/useUser";
// import NotLoggedIn from "../components/ NotLoggedIn";

const AdminDashboard: React.FC = () => {
  const adminLinks = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Animal Dashboard", href: "/admin/animal-dashboard" },
    { name: "Financial Dashboard", href: "/admin/financial-dashboard" },
  ];
  // const { data: user } = useUser();

  // const hasPerms = () => {
  //   console.log(user);
  //   if (!user || !user.data) return false;
  //   return user.data.role.perm_level > 5;
  // };

  // const hasAccess = hasPerms();
  // if(!user) return <NotLoggedIn hasUser={false}/>;
  // if(!hasAccess) return <NotLoggedIn hasUser={true}/>;
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar links={adminLinks} title="NEWRR Forms Dashboard" />

      <TaskManagement />
      <AnimalManagement />
    </div>
  );
};

export default AdminDashboard;
