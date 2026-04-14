function Title({ title, className = "" }) {
  return (
    <h2 className={`font-heading font-bold text-primary text-3xl md:text-4xl leading-tight ${className}`}>
      {title}
    </h2>
  )
}

export default Title