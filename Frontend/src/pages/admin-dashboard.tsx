import React from "react";
import AdminUsers from "../components/admin/Users";
import AnimalManagement from "../components/admin/AnimalManagament";
import TaskManagement from "../components/admin/TaskManagement";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { PostMethods } from "@newrr/api";
import { useQueryClient } from "@tanstack/react-query";

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
  ];

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
        <AdminUsers />
      </div>
      <div id="animals">
        <AnimalManagement />
      </div>
    </div>
  );
};

export default AdminDashboard;
