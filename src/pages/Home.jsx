import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Speakers from "../speaker/Speakers.jsx";
import SeriesContainer from "../series/SeriesContainer.jsx";

import {
    curingHeartDict,
    reflectionContemplationDict,
    generalQuranTafsir,
    lifeOfProphetMuhammad,
    angelsDict,
  } from "../data.js";

function Home() {
    let seriesDict = [
      {
        sectionHead: "Curing the Heart",
        listOfDict: curingHeartDict,
      },
      {
        sectionHead: "Reflection & Contemplation",
        listOfDict: reflectionContemplationDict,
      },
      {
        sectionHead: "General Quran Tafsir",
        listOfDict: generalQuranTafsir,
      },
      {
        sectionHead: "Life of Prophet Muhammad (S)",
        listOfDict: lifeOfProphetMuhammad,
      },
      {
        sectionHead: "Angels",
        listOfDict: angelsDict,
      },
    ];
  return (
    <>
      <Header />
      <div className="body-div">
        {/* <Speakers /> */}
        {/* <hr /> */}
        <div className="multiple-series-titles">
          {seriesDict.map((series, index) => (
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
