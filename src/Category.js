import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./App.css";

const Category = () => {
  const [Cat, setCat] = useState([]);
  const [id, setId] = useState(" ");
  const [jokeByCat, setJokeByCat] = useState([]);

  // function takeId(e) {
  //   setId(e);
  //   console.log(id);
  // }

  useEffect(() => {
    function extractCat() {
      fetch(`https://backend-server-excercise.herokuapp.com/categories`)
        .then((res) => res.json())
        .then((data) => setCat(data));
    }
    extractCat();
  }, []);

  useEffect(() => {
    function extractJokesByCat() {
      fetch(
        `https://backend-server-excercise.herokuapp.com/by-category?name=${encodeURIComponent(
          id
        )}`
      )
        .then((res) => res.json())
        .then((data) => setJokeByCat(data));
    }
    extractJokesByCat();
  }, [id]);
  return (
    <div>
      <div className="category">
        {Cat.map((cat) => {
          return (
            <button
              vlaue={cat}
              id={cat}
              key={cat}
              onClick={(e) => setId(e.target.id)}
              className="cat-button"
            >
              {cat}
            </button>
          );
        })}
      </div>
      {jokeByCat.map((joke) => {
        return (
          <p key={joke} className="random">
            {joke}
          </p>
        );
      })}
    </div>
  );
};

export default Category;
