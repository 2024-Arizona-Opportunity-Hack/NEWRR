import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface Animal {
  _id: string;
  intakeDate: number;
  name: string;
  species: string;
  sex: "Male" | "Female" | "Unknown";
  status: "Adopted" | "In Rehabilitation" | "Rehabilitated" | "Released";
  images: string[];
  behaviors: string[];
  age?: number;
  breed?: string;
  medicalInfo?: string;
  location?: string;
  notes?: string;
  weight?: number;
  intakeFormLink?: string;
  adoptionFormLink?: string;
}

const AnimalCard: React.FC<{ animal: Animal }> = ({ animal }) => {
  const [expanded, setExpanded] = useState(false);

  const statusColors = {
    Adopted: "bg-red-500",
    "In Rehabilitation": "bg-yellow-500",
    Rehabilitated: "bg-green-500",
    Released: "bg-red-500",
  };

  const renderDetail = (label: string, value: string | number | undefined) => {
    if (value === undefined || value === "") return null;
    return (
      <p className="text-sm">
        <span className="font-semibold">{label}:</span> {value}
      </p>
    );
  };

  return (
    <div
      className={`bg-gray-100 rounded-lg shadow-md p-4 mb-4 ${
        expanded ? "h-auto" : "h-20"
      } transition-all duration-300`}
    >
      <div
        className={`flex justify-between items-center ${expanded ? "mb-4" : ""}`}
      >
        <div className="flex items-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="mr-2"
            aria-label={expanded ? "Collapse details" : "Expand details"}
          >
            {expanded ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
          <div>
            <h3 className="font-semibold">
              {animal.name} (ID #{animal._id})
            </h3>
            <p className="text-sm">
              {animal.species} ({animal.sex})
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            {renderDetail("Age", animal.age)}
            {renderDetail("Breed", animal.breed)}
            {renderDetail(
              "Weight",
              animal.weight ? `${animal.weight} kg` : undefined
            )}
            {renderDetail("Location", animal.location)}
            {renderDetail("Medical Info", animal.medicalInfo)}
            {renderDetail("Notes", animal.notes)}
            {renderDetail(
              "Intake Date",
              new Date(animal.intakeDate).toLocaleDateString()
            )}
            {animal.behaviors.length > 0 && (
              <p className="text-sm">
                <span className="font-semibold">Behaviors:</span>{" "}
                {animal.behaviors.join(", ")}
              </p>
            )}
            <div className="flex space-x-2 mt-4">
              {animal.intakeFormLink && (
                <a
                  href={animal.intakeFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-darkergreen text-wolfwhite px-3 py-1 rounded text-sm text-center font-bold"
                >
                  Intake Form
                </a>
              )}
              {animal.adoptionFormLink && (
                <a
                  href={animal.adoptionFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lightgreen text-wolfwhite px-3 py-1 rounded text-sm text-center font-bold"
                >
                  Adoption Form
                </a>
              )}
            </div>
          </div>
          <div className="relative lg:h-64">
            {animal.images.length > 0 && (
              <img
                src={animal.images[0]}
                alt={animal.name}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalCard;
