import React from "react";
import AnimalManagament from "../components/admin/AnimalManagament";
import TaskManagement from "../components/admin/TaskManagement";
import Navbar from "../components/Navbar";
import Users from "../components/admin/Users";
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
        <Users />
      </div>
      <div id="animals">
        <AnimalManagament />
      </div>
    </div>
  );
};

export default AdminDashboard;
