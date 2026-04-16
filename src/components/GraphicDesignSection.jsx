import Title from "../components/Title";
import Text from "../components/Text";
import banner from "../assets/images/banner.webp";

const features = [
  "Logo's en visuele identiteit",
  "Visitekaartjes",
  "Brochures en menu's",
  "Social media content design",
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-3 w-3 text-white"
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
    <section className="flex flex-col gap-10 bg-gray-100 px-6 py-16 md:flex-row md:items-center md:justify-between md:gap-16 md:py-24 md:pl-24">
      <div className="flex flex-col gap-4">
        <Title title="Graphic Design" />

        <Text text="Wij ontwerpen professionele grafische materialen die bijdragen aan een sterke en herkenbare uitstraling van je merk. Een logo of visitekaartje is vaak het eerste wat een klant ziet. Wij zorgen ervoor dat dit een onvergetelijke indruk achterlaat." />

        <ul className="space-y-2">
          {features.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 flex items-center justify-center rounded-full bg-accent p-1">
                <CheckIcon />
              </div>

              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <img
          src={banner}
          alt="banner graphic design"
          className="h-auto object-cover drop-shadow-2xl md:max-w-[780px]"
        />
      </div>
    </section>
  );
}

export default GraphicDesignSection;
