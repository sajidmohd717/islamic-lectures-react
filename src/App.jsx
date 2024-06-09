import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Speakers from "./speaker/Speakers.jsx";
import Series from "./series/Series.jsx"
import SeriesDraft from "./series/SeriesDraft.jsx";


function App() {
  return (
    <>
      <Header />
      <Speakers />
      <hr />
      <h3>Heart Softeners</h3>
      <SeriesDraft />
      <Footer />
    </>
  );
}

export default App;
