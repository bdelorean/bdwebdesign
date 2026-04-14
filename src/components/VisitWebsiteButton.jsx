function VisitWebsiteButton({ href, text = "Bezoek website ->", className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-fit rounded-xl bg-white py-4 px-[26px] font-heading text-[18px] font-medium text-primary shadow-xl transition-all duration-300 ease-out hover:bg-primary hover:text-textWhite ${className}`}
    >
      {text}
    </a>
  );
}

export default VisitWebsiteButton;
