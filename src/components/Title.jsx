function Title({ title, className = "" }) {
  return (
    <h2 className={`font-heading font-bold text-primary md:text-[36px] leading-tight ${className}`}>
      {title}
    </h2>
  )
}

export default Title