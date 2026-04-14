function Badge({ text, className = "" }) {
  return (
    <span
      className={`font-sans uppercase text-accent text-[12px] font-semibold tracking-wide ${className}`}
    >
      {text}
    </span>
  );
}

export default Badge;
