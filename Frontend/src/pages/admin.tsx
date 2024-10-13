// admin page with log in and powerbi platform later

import React from "react";
import CustomGoogleLogin from "../components/GoogleLogin";

const Admin: React.FC = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <CustomGoogleLogin />
    </div>
  );
};

export default Admin;
