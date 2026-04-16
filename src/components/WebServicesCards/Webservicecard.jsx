function WebserviceCard({
  icon,
  title,
  description,
  sectionLabel,
  sectionItems,
}) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl bg-lightBlueBg p-8 shadow-lg transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_10px_12px_rgba(15,23,42,0.18)] md:p-10">
      <div className="flex flex-col gap-2">
        <div className="mb-4 block self-start rounded-lg bg-white p-2 shadow-md transition-all duration-300 ease-out group-hover:shadow-[0_6px_8px_rgba(15,23,42,0.16)]">
          <img src={icon} alt={title} className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <p className="text-base text-gray-600">{description}</p>
      </div>
      <div className="h-px w-full bg-gray-200" />
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase text-accent">
          {sectionLabel}
        </p>
        <p className="text-xs text-gray-500">{sectionItems.join(", ")}</p>
      </div>
    </div>
  );
}

export default WebserviceCard;
