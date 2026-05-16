import React from "react";
import "./../styles/FilterBar.css";

function FilterBar({
  selectedType,
  setSelectedType,
  topN,
  setTopN
}) {
  return (
    <div className="filter-bar">
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Placement">Placement</option>
        <option value="Result">Result</option>
        <option value="Event">Event</option>
      </select>

      {setTopN && (
        <select
          value={topN}
          onChange={(e) => setTopN(Number(e.target.value))}
        >
          <option value={5}>Top 5</option>
          <option value={10}>Top 10</option>
          <option value={15}>Top 15</option>
        </select>
      )}
    </div>
  );
}

export default FilterBar;