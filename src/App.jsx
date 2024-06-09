import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Speakers from "./speaker/Speakers.jsx";
import SeriesContainer from "./series/SeriesContainer.jsx";
import { heartSoftenersDict } from "./data.js";

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
      <SeriesContainer sectionHead={"General Quran Tafsir"} listOfDict={[]} />
      <Footer />
    </>
  );
}

export default App;
