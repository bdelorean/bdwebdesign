import Badge from "./Badge";
import Title from "./Title";
import Text from "./Text";
import ServicesList from "./ServicesList";
import VisitWebsiteButton from "./VisitWebsiteButton";

function Project({
  image,
  imageAlt,
  badge,
  title,
  text,
  services,
  websiteUrl,
  className = "",
  imageClassName = "",
  contentClassName = "",
  reverse = false,
}) {
  return (
    <section
      className={`flex flex-col items-center gap-10 px-6 py-16 md:gap-24 md:p-24 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } ${className}`}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="reveal-up cursor-pointer overflow-hidden rounded-2xl shadow-[-10px_-10px_0_#F1F5F9,0_4px_4px_rgba(0,0,0,0.25)]">
          <img
            src={image}
            alt={imageAlt}
            className={`w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.08] ${imageClassName}`}
          />
        </div>
      </div>

      <div
        className={`w-full md:w-1/2 flex flex-col items-start gap-4 md:gap-5 ${contentClassName}`}
      >
        <Badge text={badge} />
        <Title title={title} />
        <Text text={text} />
        <ServicesList services={services} />
        <VisitWebsiteButton href={websiteUrl} />
      </div>
    </section>
  );
}

export default Project;
