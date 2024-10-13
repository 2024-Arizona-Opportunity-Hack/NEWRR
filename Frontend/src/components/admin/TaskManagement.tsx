// src/components/TaskManagement.tsx

import React from "react";

const TaskManagement: React.FC = () => (
  <div className="flex-1 p-4 bg-darkestgreen m-2">
    <div className="flex justify-between mb-4">
      <h2 className="font-['Montserrat'] font-bold text-white   ">
        Task Management
      </h2>
      <span className="text-white font-['Outfit']">By: admin</span>
    </div>
    <p className="text-white font-['Outfit']">To Do: checkmark</p>
  </div>
);

export default TaskManagement;
