import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "./Categories/Categories.jsx";
import Footer from "../../Footer.jsx";
import SeriesContainer from "../../series/SeriesContainer.jsx";
import imageMap from "./imageImports.js";
import Speakers from "./speaker/Speakers.jsx";
import Intro from "./intro/Intro.jsx";

function Home() {
  const [displayedSeries, setDisplayedSeries] = useState("All");
  const [seriesData, setSeriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeriesData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/series');
        console.log('Raw data:', response.data); // Log raw data
        const data = response.data;
        
        // Group series by category
        const groupedData = data.reduce((acc, series) => {
          if (!acc[series.category]) {
            acc[series.category] = [];
          }
          acc[series.category].push({
            ...series,
            thumbnailImage: imageMap[series.thumbnail] || 'default-image-url'
          });
          return acc;
        }, {});

        console.log('Grouped data:', groupedData); // Log grouped data

        // Convert grouped data to array format
        const formattedData = Object.entries(groupedData).map(([category, seriesList]) => ({
          sectionTitle: category,
          seriesList
        }));

        console.log('Formatted data:', formattedData); // Log formatted data

        setSeriesData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching series data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSeriesData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Intro />
      <Speakers />
      <Categories onClick={(category) => setDisplayedSeries(category)} />
      <div className="body-div">
        <div className="multiple-series-titles">
          {seriesData.map((section, index) => (
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