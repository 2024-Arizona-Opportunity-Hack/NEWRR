import React from "react";
import AnimalManagement from "../components/admin/AnimalManagament";
import TaskManagement from "../components/admin/TaskManagement";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import FinancialManagement from "../components/admin/FinancialManagement";
// import { useUser } from "../hooks/useUser";
// import NotLoggedIn from "../components/ NotLoggedIn";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const adminLinks = [
    { name: "Tasks", href: "/admin/dashboard/#tasks" },
    { name: "Animals", href: "/admin/dashboard/#animals" },
    { name: "Financials", href: "/admin/dashboard/#financials" },
    { name: "Log out", href: "" },
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
      <Navbar
        links={adminLinks}
        title="NEWRR Admin Dashboard"
        onClick={() => navigate("/admin/dashboard")}
      />

      <TaskManagement />
      <AnimalManagement />
      <FinancialManagement />
    </div>
  );
};

export default AdminDashboard;
