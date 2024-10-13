import React from "react";
import Tiles from "./Tiles";
import ToDo from "./ToDo";

// Combines todo and tiles into one area
const TaskManagement: React.FC = () => {
  return (
    <div className="w-fullbg-gray-100 flex" id="/admin/dashboard/#tasks">
      <div className="w-1/2">
        <ToDo />
      </div>
      <div className="w-1/2">
        <Tiles />
      </div>
    </div>
  );
};

export default TaskManagement;
