import Title from "../components/Title";
import Text from "../components/Text";
import banner from "../assets/images/banner.webp";

const features = [
  "Logo’s en visuele identiteit",
  "Visitekaartjes",
  "Brochures en menu’s",
  "Social media content design",
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

function GraphicDesignSection() {
  return (
    <section className="flex items-center justify-between  p-10 bg-gray-100 md:py-24 md:pl-24">
      {/* LEFT */}
      <div className="flex flex-col gap-4">
        <Title title="Graphic Design" />

        <Text text="Wij ontwerpen professionele grafische materialen die bijdragen aan een sterke en herkenbare uitstraling van je merk. Een logo of visitekaartje is vaak het eerste wat een klant ziet. Wij zorgen ervoor dat dit een onvergetelijke indruk achterlaat." />

        <ul className="space-y-2">
          {features.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              {/* ICON */}
              <div className="bg-accent rounded-full p-1 flex items-center justify-center mt-1">
                <CheckIcon />
              </div>

              {/* TEXT */}
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div>
        <img
          src={banner}
          alt="banner graphic design"
          className="max-w-[780px] h-auto object-cover drop-shadow-2xl"
        />
      </div>
    </section>
  );
}

export default GraphicDesignSection;
