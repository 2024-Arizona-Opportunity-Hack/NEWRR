const FoundAnimalSection = () => {
  return (
    <section
      className="bg-[#DAD7CE] flex items-center justify-center min-h-[calc(100vh)] sm:min-h-[calc(100vh)] px-16"
      id="found"
    >
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
              thing up and place in box/crate. Ensure the animal is warm and in
              a quiet area.{" "}
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
  );
};

export default FoundAnimalSection;
