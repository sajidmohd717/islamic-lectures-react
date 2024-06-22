// src/components/Home.jsx

import React, { useState, useEffect } from "react";
import Categories from "./Categories/Categories.jsx";
import Footer from "../../Footer.jsx";
import SeriesContainer from "../../series/SeriesContainer.jsx";
import imageMap from "./imageImports.js";  // Import the imageMap
import Speakers from "./speaker/Speakers.jsx";
import Intro from "./intro/Intro.jsx";
import Navbar from "./Navbar/Navbar.jsx";

function Home() {
  const [displayedSeries, setDisplayedSeries] = useState("All");
  const [seriesData, setSeriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeriesData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/sajidmohd717/series-api/main/data.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Replace placeholder strings with actual image imports
        const updatedData = data.map(section => ({
          ...section,
          seriesList: section.seriesList.map(series => ({
            ...series,
            thumbnailImage: imageMap[series.thumbnailImage]
          }))
        }));
        setSeriesData(updatedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching series data:", error);
        setLoading(false);
      }
    };

    fetchSeriesData();
  }, []);

  const handleHeaderClick = (e) => {
    setDisplayedSeries(e.target.textContent);
  };

  const getSeriesToDisplay = () => {
    if (displayedSeries === "All") {
      return seriesData;
    }
    const selectedSeries = seriesData.find(
      (section) => section.sectionTitle === displayedSeries
    );
    return selectedSeries ? [selectedSeries] : [];
  };

  const displayDict = getSeriesToDisplay();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Intro />
    <Speakers />
      <Categories onClick={handleHeaderClick} />
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
