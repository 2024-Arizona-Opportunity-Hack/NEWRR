import React from "react";
import Tiles from "./Tiles";
import ToDo from "./ToDo";

// Combines todo and tiles into one area
const TaskManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex" id="/admin/dashboard/#tasks">
      <ToDo />
      <Tiles />
    </div>
  );
};
export default TaskManagement;
