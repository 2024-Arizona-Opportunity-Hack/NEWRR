// one pager homepage with all the sections

import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import newrrLogo from "../assets/newrr.svg";

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav ref={navbarRef} className="bg-[#DAD7CE] p-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <div className="w-12 h-12 mr-3 flex items-center justify-center">
              <img
                src={newrrLogo}
                alt="NEWRR logo"
                className="max-w-full max-h-full"
              />
            </div>
          </div>
          <h1 className="text-lg md:text-2xl font-bold font-montserrat text-center flex-grow">
            <span className="block md:hidden">NEWRR</span>
            <span className="hidden md:block">
              Nature's Edge Wildlife and Reptile Rescue
            </span>
          </h1>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto mt-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-black font-outfit mb-4">
              Rescuing, Rehabilitating, and Rehoming Wildlife and Reptiles.
            </h2>
            <p className="text-base md:text-lg mb-6 font-outfit font-normal">
              Nature's Edge Wildlife and Reptile Rescue, is a non-profit
              dedicated to rehabilitating injured wildlife and providing a safe
              haven for unwanted exotic reptiles. Our mission is to restore
              native species to health, educate the community, and help every
              animal find its place in nature or a loving home.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#3A4D42] text-white px-6 py-2 rounded font-outfit font-medium w-full sm:w-auto">
                Found an Animal?
              </button>
              <button className="bg-white text-[#3A4D42] border border-[#3A4D42] px-6 py-2 rounded font-outfit font-medium w-full sm:w-auto">
                Donate
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/path/to/chameleon-image.jpg"
              alt="Colorful chameleon"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
