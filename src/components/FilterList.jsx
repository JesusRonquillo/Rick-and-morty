import React from "react";
import "./styles/filterList.css";
const FilterList = ({ suggestedList, setSearchInput }) => {
  const handleClick = (id) => setSearchInput(id);
  return (
    <ul className="list">
      {suggestedList?.map((location) => (
        <li
          className="list__elements"
          onClick={() => handleClick(location.id)}
          key={location.id}
        >
          {location.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
