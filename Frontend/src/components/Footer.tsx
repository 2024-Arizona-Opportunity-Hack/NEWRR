const Footer = () => {
  return (
    <footer className="bg-[#3A4D42] text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-16">
        <p className="text-center font-['Outfit'] text-sm mb-2 md:mb-0">
          © Copyright {new Date().getFullYear()} Nature's Edge Wildlife and
          Reptile Rescue, All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <a href="tel:682-463-9453" className="hover:text-gray-300">
            Contact Us
          </a>
          <a
            href="https://www.youtube.com/c/NaturesEdgeWildlifeandReptileRescue"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            YouTube
          </a>
          <a
            href="https://www.instagram.com/naturesedgewildliferescue/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/Naturesedgewildliferescue"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
