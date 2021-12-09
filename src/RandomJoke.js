import { useEffect, useState } from "react";
import "./App.css";

const RandomJoke = () => {
  const [randoms, setrandom] = useState([]);
  useEffect(() => {
    function extractRandomJoke() {
      fetch("https://backend-server-excercise.herokuapp.com/random")
        .then((res) => res.json())
        .then((data) => setrandom(data));
    }
    extractRandomJoke();
  }, []);

  return <p className="random">{randoms}</p>;
};

export default RandomJoke;
