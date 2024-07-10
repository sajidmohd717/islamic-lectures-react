// src/components/Categories/Categories.jsx
import React from "react";
import styles from './Categories.module.css'

function Categories({ onClick, currentCategory }) {
  const handleCategoryClick = (category) => {
    onClick(category);
  };

  const categories = [
    { name: "For You", value: "foryou" },
    { name: "Tafsir", value: "tafsir" },
    { name: "Hadith", value: "hadith" },
    { name: "Aqeedah", value: "aqeedah" },
    { name: "Prophets", value: "prophets" },
    { name: "Angels", value: "angels" },
    { name: "Arabic", value: "arabic" },
    { name: "Sahaba", value: "sahaba" },
    { name: "Fiqh", value: "fiqh" },
    { name: "Hereafter", value: "hereafter" },
  ];

  return (
    <header>
      <div className={styles["catagories-container"]}>
        <h3 className={styles['categories-h3']}>Categories</h3>
        <div className="catagories">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryClick(category.name)}
              className={`${styles['cat-btn']} ${
                currentCategory === category.value ? styles["current-cat"] : ""
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