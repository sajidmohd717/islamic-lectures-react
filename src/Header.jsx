import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import hamburger from "./assets/hamburger.webp";
import discover from "./assets/discover.png";

function Header({ onClick }) {
  const [currentCategory, setCurrentCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    onClick(); // if you need to trigger the onClick prop for the All button
  };

  const categories = [
    { name: "All", onClick: onClick },
    { name: "Tafsir" },
    { name: "Hadith" },
    { name: "Aqeedah" },
    { name: "Prophets" },
    { name: "Angels" },
    { name: "Arabic" },
    { name: "Sahaba" },
    { name: "Fiqh" },
  ];

  return (
    <header>
      <div className="catagories-container">
        <div className="catagories">
          {/* <button className="cat-btn">
            <img className="discover" src={discover} alt="Discover" />
          </button> */}

          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`cat-btn ${
                currentCategory === category.name ? "current-cat" : ""
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="view-all-cat"></div>
      </div>
    </header>
  );
}

export default Header;
