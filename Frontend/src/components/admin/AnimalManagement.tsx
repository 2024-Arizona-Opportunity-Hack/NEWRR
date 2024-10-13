import React, { useState, useEffect } from "react";
import AnimalCard from "./AnimalCard";
import SearchBar, { FilterOptions } from "./SearchBar";

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

const AnimalManagement: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const animalsPerPage = 9;

  useEffect(() => {
    // Fetch animals from API or load from local data
    // For now, we'll use dummy data
    const dummyAnimals: Animal[] = [
      {
        _id: "a1",
        intakeDate: 1622577600000, // Unix timestamp
        name: "Luna",
        species: "Wolf",
        sex: "Female",
        status: "In Rehabilitation",
        images: [
          "https://images.unsplash.com/photo-1612024782955-49fae79e42bb?w=500&h=500&fit=crop",
        ],
        behaviors: ["Curious", "Playful"],
        age: 4,
        breed: "Gray Wolf",
        medicalInfo: "Fractured leg, undergoing treatment",
        location: "Wildlife Rescue Center",
        notes: "Found injured in the forest.",
        weight: 50,
        intakeFormLink: "https://example.com/intake-form-luna",
        adoptionFormLink: "https://example.com/adopt-luna",
      },
      {
        _id: "a2",
        intakeDate: 1619875200000,
        name: "Max",
        species: "Eagle",
        sex: "Male",
        status: "Rehabilitated",
        images: ["https://example.com/max.jpg"],
        behaviors: ["Aggressive", "Alert"],
        age: 3,
        breed: "Bald Eagle",
        medicalInfo: "Broken wing, fully healed",
        location: "Sky Sanctuary",
        notes: "Ready for release into the wild.",
        weight: 6,
        intakeFormLink: "https://example.com/intake-form-max",
        adoptionFormLink: "https://example.com/adopt-max",
      },
      {
        _id: "a3",
        intakeDate: 1617187200000,
        name: "Bella",
        species: "Fox",
        sex: "Female",
        status: "Released",
        images: ["https://example.com/bella.jpg"],
        behaviors: ["Shy", "Fast"],
        age: 2,
        breed: "Red Fox",
        medicalInfo: "No medical issues.",
        location: "Rehabilitation Forest",
        notes: "Released back into the wild.",
        weight: 8,
        intakeFormLink: "https://example.com/intake-form-bella",
        adoptionFormLink: "",
      },
      {
        _id: "a4",
        intakeDate: 1633027200000,
        name: "Charlie",
        species: "Deer",
        sex: "Male",
        status: "Adopted",
        images: ["https://example.com/charlie.jpg"],
        behaviors: ["Gentle", "Calm"],
        age: 5,
        breed: "White-tailed Deer",
        medicalInfo: "Recovered from a leg injury.",
        location: "Wildlife Sanctuary",
        notes: "Adopted by a local wildlife sanctuary.",
        weight: 100,
        intakeFormLink: "https://example.com/intake-form-charlie",
        adoptionFormLink: "https://example.com/adopt-charlie",
      },
      {
        _id: "a5",
        intakeDate: 1640995200000,
        name: "Kira",
        species: "Owl",
        sex: "Female",
        status: "In Rehabilitation",
        images: ["https://example.com/kira.jpg"],
        behaviors: ["Nocturnal", "Alert"],
        age: 6,
        breed: "Barn Owl",
        medicalInfo: "Collision injury, recovering well.",
        location: "Bird Sanctuary",
        notes: "Still under observation.",
        weight: 1.5,
        intakeFormLink: "https://example.com/intake-form-kira",
        adoptionFormLink: "",
      },
      {
        _id: "a6",
        intakeDate: 1635705600000,
        name: "Leo",
        species: "Lion",
        sex: "Male",
        status: "In Rehabilitation",
        images: ["https://example.com/leo.jpg"],
        behaviors: ["Aggressive", "Protective"],
        age: 8,
        breed: "African Lion",
        medicalInfo: "Malnourished, slowly gaining weight.",
        location: "Big Cat Rescue",
        notes: "Rescued from illegal captivity.",
        weight: 190,
        intakeFormLink: "https://example.com/intake-form-leo",
        adoptionFormLink: "https://example.com/adopt-leo",
      },
      {
        _id: "a7",
        intakeDate: 1654041600000,
        name: "Ruby",
        species: "Rabbit",
        sex: "Female",
        status: "Released",
        images: [
          "https://images.unsplash.com/photo-1612024782955-49fae79e42bb?w=500&h=500&fit=crop",
        ],
        behaviors: ["Shy", "Timid"],
        age: 1,
        breed: "Cottontail Rabbit",
        medicalInfo: "Healthy, no issues.",
        location: "Rehabilitation Field",
        notes: "Released after rehabilitation.",
        weight: 1.2,
        intakeFormLink: "https://example.com/intake-form-ruby",
        adoptionFormLink: "",
      },
      {
        _id: "a8",
        intakeDate: 1651363200000,
        name: "Oscar",
        species: "Bear",
        sex: "Male",
        status: "Adopted",
        images: ["https://example.com/oscar.jpg"],
        behaviors: ["Curious", "Playful"],
        age: 10,
        breed: "Grizzly Bear",
        medicalInfo: "Rescued from malnutrition, now healthy.",
        location: "Bear Sanctuary",
        notes: "Adopted by a wildlife reserve.",
        weight: 350,
        intakeFormLink: "https://example.com/intake-form-oscar",
        adoptionFormLink: "https://example.com/adopt-oscar",
      },
      {
        _id: "a9",
        intakeDate: 1638316800000,
        name: "Milo",
        species: "Hedgehog",
        sex: "Male",
        status: "Rehabilitated",
        images: ["https://example.com/milo.jpg"],
        behaviors: ["Shy", "Curious"],
        age: 3,
        breed: "European Hedgehog",
        medicalInfo: "Recovered from a paw injury.",
        location: "Small Animal Clinic",
        notes: "Ready for release into a protected area.",
        weight: 0.8,
        intakeFormLink: "https://example.com/intake-form-milo",
        adoptionFormLink: "https://example.com/adopt-milo",
      },
      {
        _id: "a10",
        intakeDate: 1643587200000,
        name: "Stella",
        species: "Penguin",
        sex: "Female",
        status: "In Rehabilitation",
        images: ["https://example.com/stella.jpg"],
        behaviors: ["Playful", "Curious"],
        age: 4,
        breed: "Emperor Penguin",
        medicalInfo: "Recovering from oil spill contamination.",
        location: "Marine Rescue Center",
        notes: "Still undergoing rehabilitation.",
        weight: 15,
        intakeFormLink: "https://example.com/intake-form-stella",
        adoptionFormLink: "",
      },
    ];
    setAnimals(dummyAnimals);
    setFilteredAnimals(dummyAnimals);
  }, []);

  const handleSearch = (query: string, filters: FilterOptions) => {
    const results = animals.filter((animal) => {
      const matchesQuery =
        animal.name.toLowerCase().includes(query.toLowerCase()) ||
        animal.species.toLowerCase().includes(query.toLowerCase()) ||
        animal._id.toLowerCase().includes(query.toLowerCase());

      const matchesFilters = Object.entries(filters).every(([key, value]) => {
        if (!value) return true; // Skip empty filters

        if (key === "behavior") {
          return animal.behaviors.some((behavior) =>
            behavior.toLowerCase().includes(value.toLowerCase())
          );
        }

        const animalValue = animal[key as keyof Animal];

        if (typeof animalValue === "string") {
          return animalValue.toLowerCase().includes(value.toLowerCase());
        }

        return true;
      });

      return matchesQuery && matchesFilters;
    });

    setFilteredAnimals(results);
    setCurrentPage(1);
  };

  const indexOfLastAnimal = currentPage * animalsPerPage;
  const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage;
  const currentAnimals = filteredAnimals.slice(
    indexOfFirstAnimal,
    indexOfLastAnimal
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-16 py-8">
      <h1 className="text-3xl font-bold mb-6">Animal Management</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentAnimals.map((animal) => (
          <AnimalCard key={animal._id} animal={animal} />
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        {Array.from(
          { length: Math.ceil(filteredAnimals.length / animalsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-darkergreen text-white"
                  : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default AnimalManagement;
