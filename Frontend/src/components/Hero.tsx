import newrrLogo from "../assets/newrr.svg";

const Hero: React.FC = () => {
  return (
    <main className="pt-16 sm:pt-20 flex items-center bg-[#FFFFFF] justify-center min-h-[calc(100vh)] sm:min-h-[calc(100vh)] px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:w-full mb-8 md:mb-0">
            <h2 className="font-['Outfit'] font-black text-2xl sm:text-3xl md:text-4xl text-[#101010] leading-tight">
              Rescuing, Rehabilitating, and Rehoming Wildlife and Reptiles.
            </h2>
            <p className="font-['Outfit'] font-regular text-base md:text-lg mt-6 mb-6 font-outfit font-normal">
              Nature's Edge Wildlife and Reptile Rescue, is a non-profit
              dedicated to rehabilitating injured wildlife and providing a safe
              haven for unwanted exotic reptiles. Our mission is to restore
              native species to health, educate the community, and help every
              animal find its place in nature or a loving home.
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
  );
};

export default Hero;
