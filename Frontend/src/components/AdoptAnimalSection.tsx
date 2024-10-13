import EnhancedAnimalCarousel from "./EnhancedAnimalCarousel";
import { useState, useEffect } from "react";
import Spinner from "./spinner";

// AdoptAnimalSection component definition
const AdoptAnimalSection: React.FC = () => {
  // Define the Animal interface to type the animal data
  interface Animal {
    id: number;
    name: string;
    species: string;
    gender: string;
    age: number;
    image: string;
    description: string;
  }

  // State to store the list of animals available for adoption
  const [results, setResults] = useState<Animal[]>([]);
  // State to track the loading status
  const [loading, setLoading] = useState(true);

  // Effect to simulate fetching animal data
  useEffect(() => {
    // Simulate a network request with a timeout
    setTimeout(() => {
      setResults([
        // Sample animal data
        {
          id: 1,
          name: "Luna",
          species: "Parrot",
          gender: "Female",
          age: 2,
          image:
            "https://images.unsplash.com/photo-1612024782955-49fae79e42bb?w=500&h=500&fit=crop",
          description:
            "Luna is a playful axolotl known for her unique ability to regenerate lost body parts. She loves to swim and eat small aquatic creatures. Axolotls are neotenic salamanders, which means they retain juvenile features in adulthood. Luna's pink coloration is due to a pigment mutation. She has external gills that look like feathery structures on the sides of her head, which she uses to breathe underwater. Luna is very curious and often investigates new objects added to her aquarium. She enjoys a diet of worms, small fish, and specially formulated axolotl pellets. Despite her alien-like appearance, Luna is quite gentle and can recognize her caretakers.",
        },
        {
          id: 2,
          name: "Max",
          species: "Axolotl",
          gender: "Male",
          age: 2,
          image:
            "https://images.unsplash.com/photo-1612024782955-49fae79e42bb?w=500&h=500&fit=crop",
          description: "Max is cool",
        },
        // Additional animal data...
      ]);
      setLoading(false); // Set loading to false after data is fetched
    }, 1000); // Simulate an 8-second delay
  }, [results]);

  return (
    <section
      className="bg-[#3A4D42] flex items-center justify-center min-h-[calc(100vh)] py-16 lg:py-16 px-16"
      id="adopt" // Section ID for navigation
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="font-['Montserrat'] font-bold text-4xl text-[#DAD7CE] mb-4">
            Want to Adopt an Animal?
          </h3>
          <p className="font-['Outfit'] text-lg text-[#DAD7CE]">
            If you are interested in adopting an animal, take a look at what we
            currently have, and get in contact with us!
          </p>
        </div>
        {loading ? (
          <Spinner /> // Show a spinner while loading
        ) : results.length > 0 ? (
          <div className="carousel flex justify-center items-center space-x-4">
            <EnhancedAnimalCarousel animals={results} />
          </div>
        ) : (
          <div className="text-center font-bold text-lg text-[#DAD7CE] p-8">
            No animals available for adoption at the moment. Please check back
            later.
          </div>
        )}
      </div>
    </section>
  );
};

export default AdoptAnimalSection;
