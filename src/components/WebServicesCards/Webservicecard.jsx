function WebserviceCard({
  icon,
  title,
  description,
  sectionLabel,
  sectionItems,
}) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl bg-lightBlueBg p-10 shadow-lg transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_10px_12px_rgba(15,23,42,0.18)]">
      <div className="flex flex-col gap-2">
        {/* ICON */}
        <div className="mb-4 block self-start rounded-lg bg-white p-2 shadow-md transition-all duration-300 ease-out group-hover:shadow-[0_6px_8px_rgba(15,23,42,0.16)]">
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>
        {/* TITLE */}
        <h3 className="font-bold text-primary text-lg">{title}</h3>
        {/* DESCRIPTION */}
        <p className="text-base text-gray-600">{description}</p>
      </div>
      {/* LINE */}
      <div className="w-full h-px bg-gray-200"></div>
      <div className="flex flex-col gap-2">
        {/* IDEAL VOOR */}
        <p className="text-xs text-accent font-semibold uppercase">
          {sectionLabel}
        </p>
        {/* LIST */}
        <p className="text-xs text-gray-500">{sectionItems.join(", ")}</p>
      </div>
    </div>
  );
}

export default WebserviceCard;
