function WebserviceCard({
  icon,
  title,
  description,
  sectionLabel,
  sectionItems,
}) {
  return (
    <div className="p-10 rounded-2xl shadow-lg bg-lightBlueBg flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        {/* ICON */}
        <div className="bg-white p-2 rounded-lg shadow-md block mb-4 self-start">
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
