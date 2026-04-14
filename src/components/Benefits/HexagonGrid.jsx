import HexagonItem from "./HexagonItem"
import benefitsData from "./benefitsData";

function HexagonGrid() {
  return (
    <div className="hexagon-group hidden self-center md:flex">
      <div className="hexagon-grid">
        {benefitsData.map((item, index) => (
          <HexagonItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default HexagonGrid
