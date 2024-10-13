import React, { useState } from "react";
import { Eye } from "lucide-react";

interface Animal {
  id: number;
  name: string;
  species: string;
  gender: string;
  status: "Adopted" | "In Rehabilitation" | "Rehabilitated" | "Released";
  description: string;
  images: string[];
}

const AnimalCard: React.FC<{ animal: Animal }> = ({ animal }) => {
  const [expanded, setExpanded] = useState(false);

  const statusColors = {
    Adopted: "bg-red-500",
    "In Rehabilitation": "bg-yellow-500",
    Rehabilitated: "bg-green-500",
    Released: "bg-red-500",
  };

  return (
    <div
      className={`bg-gray-100 rounded-lg shadow-md p-4 mb-4 ${expanded ? "h-auto" : "h-20"} transition-all duration-300`}
    >
      <div
        className={`flex justify-between items-center ${expanded ? "mb-4" : ""}`}
      >
        <div className="flex items-center">
          <button onClick={() => setExpanded(!expanded)} className="mr-2">
            <Eye className="w-5 h-5" />
          </button>
          <div>
            <h3 className="font-semibold">
              {animal.name} (ID #{animal.id})
            </h3>
            <p className="text-sm">{animal.species}</p>
          </div>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-white text-sm ${statusColors[animal.status]}`}
        >
          {animal.status}
        </span>
      </div>
      {expanded && (
        <div className="grid grid-cols-2 gap-4">
          <p className="text-sm">{animal.description}</p>
          <div className="relative h-40">
            {/* Implement carousel here */}
            <img
              src={animal.images[0]}
              alt={animal.name}
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalCard;
