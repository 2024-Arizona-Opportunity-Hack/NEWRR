import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
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
      className={`h-16 bg-gray-100 rounded-lg shadow-md p-4 mb-4 ${expanded ? "h-auto" : "h-20"} transition-all duration-300`}
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
            <p className="text-sm">
              {animal.species} ({animal.gender})
            </p>
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
          <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
            <p className="text-sm leading-relaxed">{animal.description}</p>
          </div>
          <div className="relative">
            <ImageSlider images={animal.images} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalCard;
