// src/components/Home.jsx
import React, { useState, useEffect } from "react";
import Categories from "./Categories/Categories.jsx";
import Footer from "../../Footer.jsx";
import SeriesContainer from "../../series/SeriesContainer.jsx";
import imageMap from "./imageImports.js";
import Speakers from "./speaker/Speakers.jsx";
import Intro from "./intro/Intro.jsx";

function cleanupJSON(jsonString) {
  return jsonString.replace(/^\uFEFF/, '')
                   .replace(/[\u0000-\u001F\u007F-\u009F]/g, "")
                   .trim();
}

function Home() {
  const [displayedSeries, setDisplayedSeries] = useState("All");
  const [seriesData, setSeriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("foryou");

  useEffect(() => {
    const fetchSeriesData = async () => {
      console.log("Fetching data for category:", currentCategory);
      setLoading(true);
      try {
        const url = `https://sajidmohd717.github.io/series-api/${currentCategory}-data.json?t=${Date.now()}`;
        console.log("Fetching from URL:", url);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const rawText = await response.text();
        console.log("Raw response:", rawText);
        
        let data;
        try {
          const cleanedText = cleanupJSON(rawText);
          data = JSON.parse(cleanedText);
        } catch (parseError) {
          console.error("JSON Parse Error:", parseError);
          console.log("Problematic JSON:", rawText);
          throw parseError;
        }
        
        console.log("Parsed data:", data);
        const updatedData = data.map((section) => ({
          ...section,
          seriesList: section.seriesList.map((series) => ({
            ...series,
            thumbnailImage: imageMap[series.thumbnailImage] || series.thumbnailImage,
          })),
        }));
        setSeriesData(updatedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching series data:", error);
        setLoading(false);
      }
    };

    fetchSeriesData();
  }, [currentCategory]);

  const handleCategoryChange = (category) => {
    console.log("Category changed to:", category);
    const formattedCategory = category.toLowerCase().replace(/\s+/g, '');
    console.log("Formatted category:", formattedCategory);
    setCurrentCategory(formattedCategory);
    setDisplayedSeries("All");
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
  console.log("Display Dictionary:", displayDict);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="main-container">
        <Intro />
        <Speakers />
        <Categories onClick={handleCategoryChange} currentCategory={currentCategory} />
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
      </div>
    </>
  );
}

export default Home;