import { useEffect, useState } from "react/cjs/react.development";
import "./App.css";

const Popular = () => {
  const [pops, setPop] = useState([]);
  useEffect(() => {
    fetch("https://backend-server-excercise.herokuapp.com/popular")
      .then((res) => res.json())
      .then((data) => setPop(data));
  }, []);
  return (
    <div>
      {pops.map((pop) => {
        return (
          <p key={pop} className="random">
            {pop}
          </p>
        );
      })}
    </div>
  );
};
export default Popular;
