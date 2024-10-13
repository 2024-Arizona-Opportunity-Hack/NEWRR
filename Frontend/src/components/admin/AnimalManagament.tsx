import { useState, useEffect } from "react";
import AnimalCard from "./AnimalCard";
import SearchBar from "./SearchBar";

interface Animal {
  id: number;
  name: string;
  species: string;
  gender: string;
  status: "Adopted" | "In Rehabilitation" | "Rehabilitated" | "Released";
  description: string;
  images: string[];
}
interface FilterOptions {
  gender: string;
  species: string;
  status: string;
  id: string;
  name: string;
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
        id: 1,
        name: "Luna",
        species: "Wolf",
        gender: "Female",
        status: "In Rehabilitation",
        description:
          "Luna is a young wolf found injured in the forest. Luna is a young wolf found injured in the forest. Luna is a young wolf found injured in the forest. Luna is a young wolf found injured in the forest. Luna is a young wolf found injured in the forest. Luna is a young wolf found injured in the forest. Luna is a young wolf found injured in the forest. Luna is a young wolf found injured in the forest.",
        images: ["/placeholder.svg?height=200&width=200"],
      },
      {
        id: 2,
        name: "Max",
        species: "Eagle",
        gender: "Male",
        status: "Rehabilitated",
        description:
          "Max is a majestic eagle that was treated for a broken wing.",
        images: ["/placeholder.svg?height=200&width=200"],
      },
      {
        id: 3,
        name: "Bella",
        species: "Fox",
        gender: "Female",
        status: "Released",
        description:
          "Bella, a playful fox, was released back into the wild after rehabilitation.",
        images: ["/placeholder.svg?height=200&width=200"],
      },
      {
        id: 4,
        name: "Charlie",
        species: "Deer",
        gender: "Male",
        status: "Adopted",
        description:
          "Charlie, a gentle deer, was adopted by a wildlife sanctuary.",
        images: ["/placeholder.svg?height=200&width=200"],
      },
      {
        id: 5,
        name: "Kira",
        species: "Owl",
        gender: "Female",
        status: "In Rehabilitation",
        description:
          "Kira is a nocturnal owl recovering from a collision with a vehicle.",
        images: ["/placeholder.svg?height=200&width=200"],
      },
      {
        id: 6,
        name: "Leo",
        species: "Lion",
        gender: "Male",
        status: "In Rehabilitation",
        description:
          "Leo is a rescued lion undergoing rehabilitation after being rescued from a circus.",
        images: ["/placeholder.svg?height=200&width=200"],
      },
      {
        id: 7,
        name: "Ruby",
        species: "Rabbit",
        gender: "Female",
        status: "Released",
        description:
          "Ruby was released into the wild after receiving treatment for a leg injury.",
        images: ["/placeholder.svg?height=200&width=200"],
      },
      {
        id: 8,
        name: "Oscar",
        species: "Bear",
        gender: "Male",
        status: "Adopted",
        description:
          "Oscar is a brown bear that was adopted by a wildlife reserve.",
        images: ["/placeholder.svg?height=200&width=200"],
      },
      {
        id: 9,
        name: "Milo",
        species: "Hedgehog",
        gender: "Male",
        status: "Rehabilitated",
        description:
          "Milo was rehabilitated after being found in a garden with an injured paw.",
        images: ["/placeholder.svg?height=200&width=200"],
      },
      {
        id: 10,
        name: "Stella",
        species: "Penguin",
        gender: "Female",
        status: "In Rehabilitation",
        description:
          "Stella, a rescued penguin, is recovering from an oil spill incident.",
        images: ["/placeholder.svg?height=200&width=200"],
      },
      {
        id: 11,
        name: "Duke",
        species: "Turtle",
        gender: "Male",
        status: "Released",
        description:
          "Duke, a sea turtle, was released after being treated for a shell injury.Sasha is a rescued python that was nursed back to health after an infection. Sasha is a rescued python that was nursed back to health after an infection. Sasha is a rescued python that was nursed back to health after an infection. Sasha is a rescued python that was nursed back to health after an infection.",
        images: ["/placeholder.svg?height=200&width=200"],
      },
      {
        id: 12,
        name: "Sasha",
        species: "Snake",
        gender: "Female",
        status: "Rehabilitated",
        description:
          "Sasha is a rescued python that was nursed back to health after an infection.",
        images: ["/placeholder.svg?height=200&width=200"],
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
        animal.id.toString().includes(query);

      const matchesFilters = Object.entries(filters).every(([key, value]) => {
        if (!value) return true; // Skip empty filters
        const animalValue = animal[key as keyof Animal];
        return (
          typeof animalValue === "string" &&
          animalValue.toLowerCase().includes(value.toLowerCase())
        );
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold pb-4 px-16">Animal Management</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-16">
        {currentAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        {Array.from(
          { length: Math.ceil(filteredAnimals.length / animalsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? "bg-darkergreen text-white" : "bg-gray-200"}`}
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
