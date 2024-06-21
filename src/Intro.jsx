import Speakers from "./speaker/Speakers"

function Intro() {
    return (
      <>
        <div className="title-container">
          <h1 className="title">Islamic Lecture Series Collections</h1>
          <p className="title-p">
            Learn and gain Islamic knowledge through the various series of
            lectures we have by your favorite speakers, all categorized in the
            best way. Find and search for what you want seamlessly
          </p>
        </div>

        <Speakers />
      </>
    );
}

export default Intro