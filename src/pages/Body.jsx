import React, { useState } from "react";

import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Speakers from "../speaker/Speakers.jsx";
import SeriesContainer from "../series/SeriesContainer.jsx";

function Home(props) {

  const [displayedSeries, setDisplayedSeries] = useState("All");

  const handleHeaderClick = (e) => {
    console.log(e.target.textContent);
  };

  const series = [
    {
      name: "All",
      series: props.all,
    },
  ];

  const getSeriesToDisplay = () => {
    if (displayedSeries === "All") {
      return props.all;
    }
    // Add more conditions if there are more categories
    return [];
  };

  const displayDict = getSeriesToDisplay();

  return (
    <>
      <Header onClick={handleHeaderClick} />
      <div className="body-div">
        {/* <Speakers /> */}
        {/* <hr /> */}
        <div className="multiple-series-titles">
          {displayDict.map((series, index) => (
            <SeriesContainer
              key={index}
              sectionHead={series.sectionHead}
              listOfDict={series.listOfDict}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
