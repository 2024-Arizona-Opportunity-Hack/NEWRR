import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import newrrLogo from "../assets/newrr.svg";

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 bg-[#FFFFFF] text-[#101010] z-50 transition-transform duration-300 ${
          isNavbarVisible
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center">
              <img
                src={newrrLogo}
                alt="NEWRR logo"
                className="w-12 h-12 mr-3"
              />
              <Link
                to="/"
                className="font-['Montserrat'] font-bold text-2xl sm:text-3xl"
              >
                <span className="block md:hidden">NEWRR</span>
                <span className="hidden md:block">
                  Nature's Edge Wildlife and Reptile Rescue
                </span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="hover:text-gray-700">
                Found an Animal?
              </Link>
              <Link to="adopt" className="hover:text-gray-700">
                Adopt an Animal
              </Link>
              <Link to="/" className="hover:text-gray-700">
                Donate
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#101010] focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sliding Menu */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 right-0 max-w-xs w-full bg-[#FFFFFF] text-[#101010] transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center`}
      >
        <div className="flex flex-col space-y-8 p-4 items-center">
          <ul className="space-y-4 text-center">
            <li>
              <Link to="/" className="hover:text-gray-700">
                Found an Animal?
              </Link>{" "}
            </li>
            <li>
              <Link to="/" className="hover:text-gray-700">
                Adopt an Animal
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-700">
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero content */}
      <main className="pt-16 sm:pt-20 flex items-center bg-[#FFFFFF] justify-center min-h-[calc(100vh)] sm:min-h-[calc(100vh)]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:w-full mb-8 md:mb-0">
              <h2 className="font-['Outfit'] font-black text-2xl sm:text-3xl md:text-4xl text-[#101010] leading-tight">
                Rescuing, Rehabilitating, and Rehoming Wildlife and Reptiles.
              </h2>
              <p className="font-['Outfit'] font-regular text-base md:text-lg mt-6 mb-6 font-outfit font-normal">
                Nature's Edge Wildlife and Reptile Rescue, is a non-profit
                dedicated to rehabilitating injured wildlife and providing a
                safe haven for unwanted exotic reptiles. Our mission is to
                restore native species to health, educate the community, and
                help every animal find its place in nature or a loving home.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-[#3A4D42] text-white px-6 py-2 rounded font-outfit font-medium whitespace-nowrap">
                  Found an Animal?
                </button>
                <button className="bg-white text-[#3A4D42] border border-[#3A4D42] px-6 py-2 rounded font-outfit font-medium whitespace-nowrap">
                  Donate
                </button>
              </div>
            </div>
            <div className="md:w-full mt-8 md:mt-0 flex justify-center">
              <img
                src={newrrLogo}
                alt="NEWRR logo"
                className="rounded-lg shadow-lg w-3/4"
              />
            </div>
          </div>
        </div>
      </main>

      {/* What we do, and how the process works */}
      <section className="bg-[#61805B] flex items-center justify-center min-h-[calc(100vh)] sm:min-h-[calc(100vh)]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-['Montserrat'] font-bold text-4xl text-white mb-4">
                What We Do
              </h3>
              <ul className="text-white space-y-4">
                <li>
                  <strong className="font-['Outfit'] font-normal text-xl">
                    Wildlife Rehabilitation
                  </strong>
                  <p className="font-['Outfit'] text-base">
                    We rehabilitate injured, orphaned, or abandoned native
                    wildlife, including reptiles, bats, birds of prey, and some
                    mammals.
                  </p>
                </li>
                <li>
                  <strong className="font-['Outfit'] font-normal text-xl">
                    Exotic Reptile Rescue
                  </strong>
                  <p className="font-['Outfit'] text-base">
                    We accept unwanted pet reptiles and amphibians, providing
                    them with necessary care until they can be adopted into
                    suitable homes.
                  </p>
                </li>
                <li>
                  <strong className="font-['Outfit'] font-normal text-xl">
                    Transport Assistance
                  </strong>
                  <p className="font-['Outfit'] text-base">
                    If we cannot personally care for a specific species, we help
                    with the safe transport of wildlife to other qualified
                    rehabilitators.
                  </p>
                </li>
                <li>
                  <strong className="font-['Outfit'] font-normal text-xl">
                    Educational Outreach
                  </strong>
                  <p className="font-['Outfit'] text-base">
                    We provide educational programs focused on wildlife
                    conservation, habitat preservation, species identification,
                    and preventing human-wildlife conflicts.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-bold text-4xl text-white mb-4">
                How the Process Works
              </h3>
              <ul className="text-white space-y-4">
                <li>
                  <strong className="font-['Outfit'] font-normal text-xl">
                    Report and Intake
                  </strong>
                  <p className="font-['Outfit'] text-base">
                    If you find an injured or abandoned animal, call us for
                    immediate assistance. We assess the situation and arrange
                    intake for proper care.
                  </p>
                </li>
                <li>
                  <strong className="font-['Outfit'] font-normal text-xl">
                    Assessment and Care
                  </strong>
                  <p className="font-['Outfit'] text-base">
                    Upon arrival, the animal undergoes a thorough health
                    evaluation. We provide medical treatment and rehabilitation,
                    ensuring the animal's recovery and preparation for release
                    or adoption.
                  </p>
                </li>
                <li>
                  <strong className="font-['Outfit'] font-normal text-xl">
                    Rehabilitation and Monitoring
                  </strong>
                  <p className="font-['Outfit'] text-lg">
                    We continuously monitor the animal's progress, offering any
                    necessary behavior conditioning or specialized care to
                    ensure it regains its ability to thrive.
                  </p>
                </li>
                <li>
                  <strong className="font-['Outfit'] font-normal text-xl">
                    Release or Adoption
                  </strong>
                  <p className="font-['Outfit'] text-lg">
                    For native wildlife, once fully rehabilitated, the animal is
                    released back into its natural habitat. For exotic reptiles,
                    we ensure they receive vet care and proper conditioning,
                    then place them up for adoption with adopters who meet
                    species-specific care requirements.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Found an Animal? */}
      <section className="bg-[#DAD7CE] flex items-center justify-center min-h-[calc(100vh)] sm:min-h-[calc(100vh)]">
        <div className="container mx-auto">
          <h3 className="font-['Montserrat'] font-bold text-4xl text-[#3A4D42] mb-4">
            Found an Animal?
          </h3>
          <ul className="text-[#3A4D42] space-y-4">
            <li>
              <strong className="font-['Outfit'] font-bold">
                Found a sick, injured, or orphaned wild animal?
              </strong>{" "}
              <span className="font-['Outfit'] text-lg">
                Get it into a box with a lid or crate with a door. You can use a
                towel, sheet, etc., place it over the animal, scoop the whole
                thing up and place in box/crate. Ensure the animal is warm and
                in a quiet area.{" "}
                <strong className="font-['Outfit'] font-bold">
                  Baby animal?
                </strong>{" "}
                Place the box half on/half off of a heating pad set on low.
              </span>
            </li>
            <li>
              <strong className="font-['Outfit'] font-bold">
                Never give food or water to any animal, baby or adult.
              </strong>{" "}
              <span className="font-['Outfit'] text-lg">
                Think of it this way, if you go to the ER due to illness or
                injury, they don’t give you food or water until the doctor sees
                you.
              </span>
            </li>
            <li>
              <strong className="font-['Outfit'] font-bold">
                Please do not play with wild animals.
              </strong>{" "}
              <span className="font-['Outfit'] text-lg">
                Holding them, petting them, etc. just adds to their stress.
              </span>
            </li>
            <li>
              <strong className="font-['Outfit'] font-bold">
                Contact NEWRR.
              </strong>{" "}
              <span className="font-['Outfit'] text-lg">
                Enter information in the form below and we will reach out for
                intake and next steps.
              </span>
            </li>
            <li>
              <strong className="font-['Outfit'] font-bold">
                Animal is contained and I’ve contacted NEWRR, what now?
              </strong>{" "}
              <span className="font-['Outfit'] text-lg">
                Contact a permitted wildlife rehabilitator immediately. Helpful
                resources:{" "}
                <a href="#" className="underline">
                  Animal Help Now
                </a>
                ,{" "}
                <a href="#" className="underline">
                  DFW Wildlife Hotline
                </a>
              </span>
            </li>
          </ul>
          <button className="bg-[#3A4D42] text-white px-6 py-2 mt-6 rounded font-outfit font-medium">
            NEWRR Intake Form
          </button>
        </div>
      </section>

      {/* Want to adopt an animal? */}
      <section className="bg-[#3A4D42] flex items-center justify-center min-h-[calc(100vh)] sm:min-h-[calc(100vh)]">
        <div className="container mx-auto">
          <div className="text-left mb-8">
            <h3 className="font-['Montserrat'] font-bold text-4xl text-[#DAD7CE] mb-4">
              Want to Adopt an Animal?
            </h3>
            <p className="font-['Outfit'] text-lg text-[#DAD7CE]">
              If you are interested in adopting an animal, take a look at what
              we currently have, and get in contact with us!
            </p>
          </div>

          {/* Carousel placeholder */}
          <div className="carousel flex justify-center items-center space-x-4">
            {/* Example carousel item */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                src="animal-image.jpg"
                alt="Animal"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h4 className="font-['Outfit'] font-bold text-xl text-[#3A4D42]">
                  Animal Name
                </h4>
                <button className="bg-[#3A4D42] text-white px-4 py-2 mt-4 rounded font-outfit font-medium">
                  Adoption Form
                </button>
              </div>
            </div>
            {/* Add more carousel items as needed */}
          </div>
          {/* Carousel placeholder */}
        </div>
      </section>
      {/* Support Us and Contact */}
      <section className="bg-[#E8E8E8] flex items-center justify-center min-h-[calc(100vh)] sm:min-h-[calc(100vh)]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="text-left">
            <h3 className="font-['Montserrat'] font-bold text-4xl text-[#3A4D42] mb-4">
              Support Us!
            </h3>
            <p className="font-['Outfit'] text-lg text-[#3A4D42] mb-4">
              Nature’s Edge Wildlife and Reptile Rescue does not receive any
              state or federal funding. We rely solely on tax-deductible
              donations from the public. If you would like to donate, click on
              the button below to go to the GiveButter platform:
            </p>
            <button className="bg-[#3A4D42] text-white px-6 py-2 rounded font-outfit font-medium">
              Donate
            </button>
          </div>
          <div className="text-left">
            <h3 className="font-['Montserrat'] font-bold text-4xl text-[#3A4D42] mb-4">
              Contact
            </h3>
            <p className="font-['Outfit'] text-lg text-[#3A4D42] mb-2">
              (682) 463-9453
            </p>
            <p className="font-['Outfit'] text-lg text-[#3A4D42] mb-4">
              5828 Woodard Avenue
            </p>
            <p className="font-['Outfit'] text-lg text-[#3A4D42] mb-2">
              Follow us on Social Media:
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#3A4D42] hover:text-gray-700">
                YouTube
              </a>
              <a href="#" className="text-[#3A4D42] hover:text-gray-700">
                Instagram
              </a>
              <a href="#" className="text-[#3A4D42] hover:text-gray-700">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A4D42] text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="font-['Outfit'] text-sm mb-2 md:mb-0">
            © Copyright {new Date().getFullYear()} Nature's Edge Wildlife and
            Reptile Rescue, All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Contact Us
            </a>
            <a href="#" className="hover:text-gray-300">
              YouTube
            </a>
            <a href="#" className="hover:text-gray-300">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-300">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
