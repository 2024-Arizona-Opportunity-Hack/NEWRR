const About = () => {
  return (
    <section className="bg-[#61805B] flex items-center justify-center py-16 lg:py-36 px-16">
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
                  We accept unwanted pet reptiles and amphibians, providing them
                  with necessary care until they can be adopted into suitable
                  homes.
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
                  ensuring the animal's recovery and preparation for release or
                  adoption.
                </p>
              </li>
              <li>
                <strong className="font-['Outfit'] font-normal text-xl">
                  Rehabilitation and Monitoring
                </strong>
                <p className="font-['Outfit'] text-lg">
                  We continuously monitor the animal's progress, offering any
                  necessary behavior conditioning or specialized care to ensure
                  it regains its ability to thrive.
                </p>
              </li>
              <li>
                <strong className="font-['Outfit'] font-normal text-xl">
                  Release or Adoption
                </strong>
                <p className="font-['Outfit'] text-lg">
                  For native wildlife, once fully rehabilitated, the animal is
                  released back into its natural habitat. For exotic reptiles,
                  we ensure they receive vet care and proper conditioning, then
                  place them up for adoption with adopters who meet
                  species-specific care requirements.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
