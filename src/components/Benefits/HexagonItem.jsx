function HexagonItem({ icon, title, text, className }) {
    return (
      <div className={`hexagon-wrapper ${className}`}>
        
        <div className="hexagon-item">
          <div className="flex flex-col items-center text-center gap-2">
  
            <img src={icon} alt="" className="w-6 h-6" />
  
            <h3 className="font-semibold">
              {title}
            </h3>
  
            <p className="text-[14px] text-slate-500 leading-tight">
              {text}
            </p>
  
          </div>
        </div>
  
      </div>
    )
  }
  
  export default HexagonItem