// src/components/AdminManagement.tsx

import React from "react";

const UserManagement: React.FC = () => (
  <div className="w-full md:w-1/4 p-4 bg-gray-400 m-2">
    <h2 className="font-bold mb-2">Admin Mgmt</h2>
    <button className="w-full bg-gray-600 text-white py-2 mb-2">
      add admin
    </button>
    <div className="space-y-2">
      <div className="bg-gray-600 h-10"></div>
      <div className="bg-gray-600 h-10"></div>
      <div className="bg-gray-600 h-10"></div>
    </div>
  </div>
);

export default UserManagement;
