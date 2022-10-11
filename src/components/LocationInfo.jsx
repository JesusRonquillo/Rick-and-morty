import React from "react";

const LocationInfo = ({ location }) => {
  return (
    <article className="card">
      <h2 className="card__location">{location?.name}</h2>
      <ul className="card__list">
        <li className="card__element">
          <span className="card__span">Type: </span>
          {location?.type}
        </li>
        <li className="card__element">
          <span className="card__span">Dimension: </span>
          {location?.dimension}
        </li>
        <li className="card__element">
          <span className="card__span">Population: </span>
          {location?.residents.length}
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
