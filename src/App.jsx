import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Speakers from "./speaker/Speakers.jsx";
import SeriesContainer from "./series/SeriesContainer.jsx";

import whyMe from "./assets/thumbnail/heart-softeners/whyme.jpg";
import angels1 from "./assets/thumbnail/heart-softeners/angels1.jpg";
import changeofheart from './assets/thumbnail/heart-softeners/changeofheart.jpg';

function App() {
  let heartSoftenersDict = [
    {
      title: "Why Me | 2024 Ramadan Series",
      speaker: "Omar Suleiman",
      episodes: "32 Episodes",
      thumbnailImage: whyMe,
      link: "https://youtube.com/playlist?list=PLQ02IYL5pmhFYDrmxNHAlwgcHOR4h1bPa"
    },
    {
      title: "Angels in Your Presence",
      speaker: "Omar Suleiman",
      episodes: "32 Episodes",
      thumbnailImage: angels1,
      link: "https://youtube.com/playlist?list=PLQ02IYL5pmhFYDrmxNHAlwgcHOR4h1bPa"
    },
    {
      title: "Change of Heart",
      speaker: "Omar Suleiman",
      episodes: "32 Episodes",
      thumbnailImage: changeofheart,
      link: "https://youtube.com/playlist?list=PLQ02IYL5pmhFYDrmxNHAlwgcHOR4h1bPa"
    }
  ];

  return (
    <>
      <Header />
      <Speakers />
      <hr />
      <SeriesContainer
        sectionHead={"Heart Softeners"}
        listOfDict={heartSoftenersDict}
      />
      <hr />
      <SeriesContainer sectionHead={"General Quran Tafsir"} listOfDict={[]} />
      <Footer />
    </>
  );
}

export default App;
