import EnhancedAnimalCarousel from "./EnhancedAnimalCarousel";

const AdoptAnimalSection: React.FC = () => {
  const animals = [
    {
      id: 1,
      name: "Luna",
      species: "Axolotl",
      gender: "Female",
      age: 2,
      image:
        "https://images.unsplash.com/photo-1612024782955-49fae79e42bb?w=500&h=500&fit=crop",
      description:
        "Luna is a playful axolotl known for her unique ability to regenerate lost body parts. She loves to swim and eat small aquatic creatures. Axolotls are neotenic salamanders, which means they retain juvenile features in adulthood. Luna's pink coloration is due to a pigment mutation. She has external gills that look like feathery structures on the sides of her head, which she uses to breathe underwater. Luna is very curious and often investigates new objects added to her aquarium. She enjoys a diet of worms, small fish, and specially formulated axolotl pellets. Despite her alien-like appearance, Luna is quite gentle and can recognize her caretakers.",
    },
    {
      id: 2,
      name: "Spike",
      species: "Bearded Dragon",
      gender: "Male",
      age: 4,
      image:
        "https://images.unsplash.com/photo-1534993130315-74b3f9f47c76?w=500&h=500&fit=crop",
      description:
        "Spike is a friendly bearded dragon who enjoys basking in the sun and munching on vegetables. He's surprisingly social and loves attention. Bearded dragons are native to Australia and are known for the spiny projections under their throats that resemble a beard. Spike has a calm temperament and is often seen lounging on his favorite rock under his heat lamp. He has a varied diet consisting of insects like crickets and mealworms, as well as leafy greens and vegetables. Spike is diurnal, meaning he's active during the day and sleeps at night. He enjoys being handled gently and will often climb onto his caretaker's shoulders. Spike sheds his skin periodically as he grows, and he's fascinated by his reflection in mirrors.",
    },
    {
      id: 3,
      name: "Ziggy",
      species: "Sugar Glider",
      gender: "Male",
      age: 3,
      image:
        "https://images.unsplash.com/photo-1568860357750-5ca7b2e9f3e6?w=500&h=500&fit=crop",
      description:
        "Ziggy is an energetic sugar glider who loves to glide from perch to perch. He's nocturnal and enjoys fruit and insects as treats. Sugar gliders are small, omnivorous marsupials native to Australia and Indonesia. Ziggy has a special membrane called a patagium that stretches from his wrists to his ankles, allowing him to glide through the air for short distances. He's very social and forms strong bonds with his caretakers. Ziggy communicates through a variety of vocalizations, including barking, chirping, and purring. He has a sweet tooth and particularly enjoys nectar and fruit, but also needs a balanced diet including protein sources. Ziggy is an excellent climber and loves exploring his spacious cage filled with branches, ropes, and hiding spots. He's most active in the evenings and early mornings, matching his natural nocturnal rhythm.",
    },
    {
      id: 4,
      name: "Noodle",
      species: "Ball Python",
      gender: "Female",
      age: 5,
      image:
        "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=500&h=500&fit=crop",
      description:
        "Noodle is a gentle ball python who loves to curl up in warm spots. Despite her intimidating appearance, she's quite docile and easy to handle. Ball pythons get their name from their tendency to curl into a ball when they feel threatened. Noodle has beautiful patterns on her scales, with shades of brown and black creating intricate designs. She's a constrictor, which means she squeezes her prey before eating it whole. Noodle eats once every 1-2 weeks, typically consuming small rodents. She sheds her skin periodically, and it's always exciting to see her fresh, vibrant colors after shedding. Noodle is most active at dawn and dusk, and spends much of her time hiding in her favorite log or basking under her heat lamp. She's very calm during handling sessions and often explores her surroundings by flicking her tongue to smell the air.",
    },
    {
      id: 5,
      name: "Peanut",
      species: "Hedgehog",
      gender: "Female",
      age: 2,
      image:
        "https://images.unsplash.com/photo-1541795795328-f073b763494e?w=500&h=500&fit=crop",
      description:
        "Peanut is a curious hedgehog who loves to explore. She's nocturnal and enjoys a diet of insects and specially formulated hedgehog food. Hedgehogs are known for their spiny quills, which they use for protection. When scared, Peanut will roll into a tight ball, hiding her face and belly. She has a keen sense of smell and hearing, which she uses to navigate her environment and find food. Peanut enjoys running on her exercise wheel at night and exploring obstacle courses set up in her play area. She's particularly fond of mealworms as treats and will often come running at the sound of the treat container. Peanut has a habit of 'self-anointing,' where she chews on new scents and then spreads her saliva on her quills - a behavior that's not fully understood by scientists. Despite her prickly exterior, Peanut is gentle and can be quite affectionate once she's comfortable with her handlers.",
    },
    {
      id: 6,
      name: "Bubbles",
      species: "Clownfish",
      gender: "Female",
      age: 1,
      image:
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=500&h=500&fit=crop",
      description:
        "Bubbles is a vibrant clownfish who brings life and color to her coral reef aquarium. She's known for her bright orange body with white stripes and black outlines. Clownfish are famous for their symbiotic relationship with sea anemones, and Bubbles is no exception. She often darts in and out of her host anemone, which provides her with protection from predators. In return, Bubbles helps keep the anemone clean and brings it food. She's a very active swimmer and often seen darting around the aquarium, exploring every nook and cranny. Bubbles eats a varied diet of small crustaceans, algae, and specially formulated marine fish food. She's part of a small group of clownfish in the aquarium, and they have a fascinating social structure where the largest fish is always female. If Bubbles continues to grow, she may one day become the dominant female of her group!",
    },
    {
      id: 7,
      name: "Whiskers",
      species: "Chinchilla",
      gender: "Male",
      age: 3,
      image:
        "https://images.unsplash.com/photo-1626045789253-26d4df58b6c0?w=500&h=500&fit=crop",
      description:
        "Whiskers is a soft and fluffy chinchilla with a playful personality. He's known for his incredibly dense, velvety fur, which is considered one of the softest in the animal kingdom. Chinchillas are native to the Andes Mountains in South America, and Whiskers carries that legacy with his excellent jumping and climbing abilities. He loves to hop around his multi-level cage, often performing acrobatic leaps from one platform to another. Whiskers is crepuscular, meaning he's most active during dawn and dusk. He enjoys dust baths, which help keep his fur clean and healthy - it's quite a sight to see him rolling around in special chinchilla dust! His diet consists mainly of hay, supplemented with chinchilla pellets and the occasional treat of dried fruits. Whiskers has very sensitive ears and whiskers (hence his name), which he uses to navigate  his surroundings. He's quite social and enjoys interacting with his caretakers, often approaching the cage door when someone enters the room.",
    },
  ];

  return (
    <section
      className="bg-[#3A4D42] flex items-center justify-center min-h-[calc(100vh)] sm:min-h-[calc(100vh)] py-16 lg:py-16 px-16"
      id="adopt"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="font-['Montserrat'] font-bold text-4xl text-[#DAD7CE] mb-4">
            Want to Adopt an Animal?
          </h3>
          <p className="font-['Outfit'] text-lg text-[#DAD7CE]">
            If you are interested in adopting an animal, take a look at what we
            currently have, and get in contact with us!
          </p>
        </div>
        <div className="carousel flex justify-center items-center space-x-4">
          <EnhancedAnimalCarousel animals={animals} />
        </div>
      </div>
    </section>
  );
};

export default AdoptAnimalSection;
