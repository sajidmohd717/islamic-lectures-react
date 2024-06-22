import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import hamburger from "../../../assets/hamburger.webp";
import discover from "../../../assets/discover.png";
import styles from './Categories.module.css'

function Categories({ onClick }) {
  const [currentCategory, setCurrentCategory] = useState("For You");

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    onClick(); // if you need to trigger the onClick prop for the All button
  };

  const categories = [
    { name: "For You", onClick: onClick },
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
      <div className={styles["catagories-container"]}>
        <h3 className={styles['categories-h3']}>Categories</h3>
        <div className="catagories">
          {/* <button className="cat-btn">
            <img className="discover" src={discover} alt="Discover" />
          </button> */}

          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`${styles['cat-btn']} ${
                currentCategory === category.name ? styles["current-cat"] : ""
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

export default Categories;
