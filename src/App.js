import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Category from "./Category";
import NotFound from "./NotFound";
import Popular from "./Popular";
import RandomJoke from "./RandomJoke";
import Search from "./Search";
function App() {
  return (
    <div className="App">
      <header>
        <Link to="/" className="li">
          <h1>LOoL</h1>
        </Link>
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/" className="li">
                Random Joke
              </Link>
            </li>
            <li>
              <Link to="/Category" className="li">
                Jokes by category
              </Link>
            </li>
            <li>
              <Link to="/Search" className="li">
                Search Joke
              </Link>
            </li>
            <li>
              <Link to="/Popular" className="li">
                Popular Jokes
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<RandomJoke />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
