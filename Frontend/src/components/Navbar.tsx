import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import newrrLogo from "../assets/newrr.svg";

// Define the props for the Navbar component
interface NavbarProps {
  links: { name: string; href: string }[]; // Array of link objects
  title: string; // Title to display in the navbar
  color?: string; // Optional background color for the navbar
  onClick?: () => void; // Optional click handler for the logo/title
}

const Navbar: React.FC<NavbarProps> = ({ links, title, color, onClick }) => {
  // State to track if the menu is open (for mobile view)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track if the navbar is visible (based on scroll direction)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  // Refs to track the menu and navbar elements
  const menuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  // Ref to track the last scroll position
  const lastScrollTop = useRef(0);

  // Function to toggle the mobile menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to handle showing/hiding the navbar based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        setIsNavbarVisible(false); // Hide navbar on scroll down
      } else {
        setIsNavbarVisible(true); // Show navbar on scroll up
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop; // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect to close the menu if a click is detected outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false); // Close menu if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div
        ref={navbarRef}
        style={{ backgroundColor: color || "#FFFFFF" }} // Set navbar background color
        className={`fixed top-0 left-0 right-0 text-[#101010] z-50 transition-transform duration-300 ${
          isNavbarVisible
            ? "transform translate-y-0" // Show navbar
            : "transform -translate-y-full" // Hide navbar
        }`}
      >
        <div className="flex items-center justify-between h-16 sm:h-20 px-16">
          <div
            className="flex items-center"
            onClick={onClick} // Handle click on logo/title
            style={{ cursor: "pointer" }}
          >
            <img src={newrrLogo} alt="NEWRR logo" className="w-12 h-12 mr-3" />
            <Link
              to="/"
              className="font-['Montserrat'] font-bold text-2xl sm:text-3xl"
            >
              <span className="block md:hidden">NEWRR</span>
              <span className="hidden md:block">{title}</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-gray-700"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu} // Toggle mobile menu
              className="text-[#101010] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12" // Close icon
                      : "M4 6h16M4 12h16M4 18h16" // Menu icon
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        className={`fixed h-screen right-0 max-w-xs w-full bg-[#FFFFFF] text-[#101010] transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center`}
      >
        <div className="flex flex-col space-y-8 p-4 items-center">
          <ul className="space-y-8 text-center">
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="hover:text-gray-700">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
