// ContactSection component definition
const ContactSection = () => {
  return (
    <section
      className="bg-[#E8E8E8] flex items-center justify-center px-16 py-16 lg:py-36"
      id="donate" // Section ID for navigation
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Support Us Section */}
        <div className="text-left">
          <h3 className="font-['Montserrat'] font-bold text-4xl text-[#3A4D42] mb-4">
            Support Us!
          </h3>
          <p className="font-['Outfit'] text-lg text-[#3A4D42] mb-4">
            Nature’s Edge Wildlife and Reptile Rescue does not receive any state
            or federal funding. We rely solely on tax-deductible donations from
            the public. If you would like to donate, click on the button below
            to go to the GiveButter platform:
          </p>
          <button className="bg-[#3A4D42] text-white px-6 py-2 rounded font-outfit font-medium">
            <a
              href="https://givebutter.com/wbRK0J"
              target="_blank"
              rel="noreferrer"
            >
              Donate
            </a>
          </button>
        </div>
        {/* Contact Information Section */}
        <div className="text-left">
          <h3 className="font-['Montserrat'] font-bold text-4xl text-[#3A4D42] mb-4">
            Contact
          </h3>
          <p className="font-['Outfit'] text-lg text-[#3A4D42] mb-2 hover:underline">
            <a href="tel:682-463-9453">682-463-9453</a>
          </p>
          <p className="font-['Outfit'] text-lg text-[#3A4D42] mb-4 hover:underline">
            <a
              href="https://maps.app.goo.gl/9bEVKGLqsRVgysKb9"
              target="_blank"
              rel="noreferrer"
            >
              5828 Woodard Avenue
            </a>
          </p>
          <p className="font-['Outfit'] text-lg text-[#3A4D42] mb-2">
            Follow us on Social Media:
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.youtube.com/c/NaturesEdgeWildlifeandReptileRescue"
              target="_blank"
              rel="noreferrer"
              className="text-[#3A4D42] hover:text-gray-700 hover:underline"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/naturesedgewildliferescue/"
              target="_blank"
              rel="noreferrer"
              className="text-[#3A4D42] hover:text-gray-700 hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/Naturesedgewildliferescue"
              target="_blank"
              rel="noreferrer"
              className="text-[#3A4D42] hover:text-gray-700 hover:underline"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
