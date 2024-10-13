const ContactSection = () => {
  return (
    <section
      className="bg-[#E8E8E8] flex items-center justify-center min-h-[calc(100vh)] sm:min-h-[calc(100vh)] px-16"
      id="donate"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
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
  );
};

export default ContactSection;
