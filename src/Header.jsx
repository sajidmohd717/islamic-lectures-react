import hamburger from "./assets/hamburger.webp";
import discover from "./assets/discover.png";

import { Link, Route, Routes } from "react-router-dom";

function Header() {
  return (
    <header>
      {/* <div className="top-header">
        <p className="nav-info">Welcome to islamicseries.org</p>
        <img className="hamburger" src={hamburger} alt="" />
      </div> */}
      <div className="catagories-container">
        <div className="catagories">
          <Link to="/">
            <button className="cat-btn">
              <img className="discover" src={discover} alt="" />
            </button>
          </Link>

          <Link to="/">
            <button className="cat-btn current-cat">All</button>
          </Link>

          <Link to="/tafsir">
            <button className="cat-btn">Tafsir</button>
          </Link>

          <Link to="/">
            <button className="cat-btn">Hadith</button>
          </Link>

          <Link to="/">
            <button className="cat-btn">Aqeedah</button>
          </Link>

          <Link to="/">
            <button className="cat-btn">Prophets</button>
          </Link>

          <Link to="/">
            <button className="cat-btn">Angels</button>
          </Link>

          <Link to="/">
            <button className="cat-btn">Arabic</button>
          </Link>

          <Link to="/">
            <button className="cat-btn">Sahaba</button>
          </Link>

          <Link to="/">
            <button className="cat-btn">Fiqh</button>
          </Link>
        </div>
        <div className="view-all-cat"></div>
      </div>
    </header>
  );
}

export default Header;
