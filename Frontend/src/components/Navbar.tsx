import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import newrrLogo from "../assets/newrr.svg";

const Navbar: React.FC = () => {
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
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 bg-[#FFFFFF] text-[#101010] z-50 transition-transform duration-300 px-16 ${
        isNavbarVisible
          ? "transform translate-y-0"
          : "transform -translate-y-full"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <img src={newrrLogo} alt="NEWRR logo" className="w-12 h-12 mr-3" />
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
    </nav>
  );
};

export default Navbar;
