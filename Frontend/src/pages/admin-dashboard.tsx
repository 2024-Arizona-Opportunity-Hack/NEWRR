import React from "react";
import AnimalManagement from "../components/admin/AnimalManagement";
import TaskManagement from "../components/admin/TaskManagement";
import Navbar from "../components/Navbar";
import Users from "../components/admin/Users";
import { useNavigate } from "react-router-dom";
import { PostMethods } from "@newrr/api";
import { useQueryClient } from "@tanstack/react-query";
import { useUser } from "../hooks/useUser";
import NotLoggedIn from "../components/admin/NotLoggedIn";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    const postMethods = new PostMethods(import.meta.env.VITE_G_API_URL);
    await postMethods.postLogout();
    queryClient.invalidateQueries({ queryKey: ["user"] });
    navigate("/admin");
  };

  const adminLinks = [
    { name: "Management", href: "#management" },
    { name: "Admins", href: "#admins" },
    { name: "Animals", href: "#animals" },
    { name: "Log out", href: "#", onClick: handleLogout },
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Animal Dashboard", href: "/admin/animal-dashboard" },
    { name: "Financial Dashboard", href: "/admin/financial-dashboard" },
  ];
  const { data: user } = useUser();

  const hasPerms = () => {
    console.log(user);
    if (!user || !user.data) return false;
    return user.data.role.perm_level > 5;
  };

  const hasAccess = hasPerms();
  if (!user) return <NotLoggedIn hasUser={false} />;
  if (!hasAccess) return <NotLoggedIn hasUser={true} />;
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        links={adminLinks}
        title="NEWRR Admin Dashboard"
        onClick={() => navigate("/admin/dashboard")}
      />

      <div id="management">
        <TaskManagement />
      </div>
      <div id="admins">
        <Users />
      </div>
      <div id="animals">
        <AnimalManagement />
      </div>
    </div>
  );
};

export default AdminDashboard;
