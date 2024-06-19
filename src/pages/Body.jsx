import React, { useState, useEffect } from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import SeriesContainer from "../series/SeriesContainer.jsx";

import whyMe from "../assets/thumbnail/heart-softeners/whyme.jpg";
import angels1 from "../assets/thumbnail/heart-softeners/angels1.jpg";
import changeofheart from "../assets/thumbnail/heart-softeners/changeofheart.jpg";
import heartmatters from "../assets/thumbnail/heart-softeners/heartmatters.jpg";

import messageQuran from "../assets/thumbnail/general-quran-tafsir/message-quran.jpg";
import parablesQuran from "../assets/thumbnail/general-quran-tafsir/parables-quran.jpg";
import wisdomsQuran from "../assets/thumbnail/general-quran-tafsir/wisdoms-quran.jpg";

import seerahYasirQadhi from "../assets/thumbnail/life-of-prophet-muhammad/seerah-yasir.jpg";
import seerahUthman from "../assets/thumbnail/life-of-prophet-muhammad/seerah-uthman.jpg";
import seerahMufti from "../assets/thumbnail/life-of-prophet-muhammad/seerah-mufti.jpg";

import fortress from "../assets/thumbnail/hadith/fortress.jpg";

const imageMap = {
  whyMe,
  angels1,
  changeofheart,
  heartmatters,
  messageQuran,
  parablesQuran,
  wisdomsQuran,
  seerahYasirQadhi,
  seerahUthman,
  seerahMufti,
  fortress,
};

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
