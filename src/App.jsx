import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Speakers from "./speaker/Speakers.jsx";
import SeriesContainer from "./series/SeriesContainer.jsx";
import { heartSoftenersDict, generalQuranTafsir, lifeOfProphetMuhammad } from "./data.js";

function App() {
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
      <SeriesContainer
        sectionHead={"General Quran Tafsir"}
        listOfDict={generalQuranTafsir}
      />

      <hr />
      <SeriesContainer
        sectionHead={"Life of Prophet Muhammad (PBUH)"}
        listOfDict={lifeOfProphetMuhammad}
      />
      <Footer />
    </>
  );
}

export default App;
