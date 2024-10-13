import React from "react";
import FormManagement from "./FormManagement";
import ToDo from "./ToDo";

const TaskManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <ToDo />
      <FormManagement />
    </div>
  );
};
export default TaskManagement;
