import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardResident from "./components/CardResident";
import ErrorScreen from "./components/ErrorScreen";
import FilterList from "./components/FilterList";
import LocationInfo from "./components/LocationInfo";
import getRandomNumber from "./utils/getRandomNumber";

function App() {
  const [location, setLocation] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [suggestedList, setSuggestedList] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let id = getRandomNumber();
    if (searchInput) {
      id = searchInput;
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`;
    axios
      .get(URL)
      .then((res) => {
        setHasError(false);
        setLocation(res.data);
      })
      .catch((err) => {
        setHasError(true);
      });
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(e.target.idLocation.value);
  };
  const handleChange = (e) => {
    if (e.target.value === "") {
      return setSuggestedList();
    }

    const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`;
    axios
      .get(URL)
      .then((res) => setSuggestedList(res.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <img src="https://pbs.twimg.com/media/EO5OatUXkAE0qae.jpg" alt="img" />
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          id="idLocation"
          placeholder="Enter another number form 1 to 126"
          type="text"
          onChange={handleChange}
        />
        <button className="form__button">Search</button>
        <FilterList
          suggestedList={suggestedList}
          setSearchInput={setSearchInput}
        />
      </form>

      {hasError ? (
        <ErrorScreen />
      ) : (
        <div>
          <LocationInfo location={location} />
          <div className="card-container">
            {location?.residents.map((url) => (
              <CardResident key={url} url={url} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
