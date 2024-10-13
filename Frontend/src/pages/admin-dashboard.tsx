import React from "react";
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
  if(!user) return <NotLoggedIn hasUser={false}/>;
  if(!hasAccess) return <NotLoggedIn hasUser={true}/>;
  return <AdminDashboard />;
};

export default AdminDashboard;
