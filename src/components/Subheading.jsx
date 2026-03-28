function Subheading({ subheading, className = "" }) {
  return (
    <p className={`font-sans text-slate-600 md:text-[18px] ${className}`}>
      {subheading}
    </p>
  )
}

export default Subheading