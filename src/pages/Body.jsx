import React, { useState } from "react";

import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import SeriesContainer from "../series/SeriesContainer.jsx";

function Home(props) {
  const [displayedSeries, setDisplayedSeries] = useState("All");

  const handleHeaderClick = (e) => {
    setDisplayedSeries(e.target.textContent);
  };

  const getSeriesToDisplay = () => {
    if (displayedSeries === "All") {
      return props.all;
    }
    const selectedSeries = props.all.find(
      (section) => section.sectionTitle === displayedSeries
    );
    return selectedSeries ? [selectedSeries] : [];
  };

  const displayDict = getSeriesToDisplay();

  return (
    <>
      <Header onClick={handleHeaderClick} />
      <div className="body-div">
        <div className="multiple-series-titles">
          {displayDict.map((section, index) => (
            <SeriesContainer
              key={index}
              sectionHead={section.sectionTitle}
              listOfDict={section.seriesList}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
