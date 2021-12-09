import { useState } from "react";
import "./App.css";

const Search = () => {
  const [value, setValue] = useState(" ");
  const [jokesBySearch, setJokesBySearch] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://backend-server-excercise.herokuapp.com/search?text=${value}`)
      .then((res) => res.json())
      .then((data) => setJokesBySearch(data));
  };

  return (
    <div>
      <form method="Post" onSubmit={submitHandler} className="form">
        <label htmlFor="text">Search the Joke</label>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button type="submit" className="form-button">
          Find
        </button>
      </form>
      {jokesBySearch.map((jokeBy) => {
        return (
          <p key={jokeBy} className="random">
            {jokeBy}
          </p>
        );
      })}
    </div>
  );
};
export default Search;
