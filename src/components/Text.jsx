function Text({ text, className }) {
    return (
      <p className={`font-sans text-slate-600 text-[16px] whitespace-pre-line ${className}`}>
        {text}
      </p>
    )
  }
  
  export default Text