import styles from "./Speakers.module.css"; // Importing the CSS module

import omarsuleiman from "../assets/speaker/os.jpg";
import yasirqadhi from "../assets/speaker/yq.jpg";
import belalassad from "../assets/speaker/ba.jpg";
import majedmahmoud from "../assets/speaker/mm.jpg";
import yahyaalraaby from "../assets/speaker/yr.jpg";
import alihammuda from "../assets/speaker/ah.jpg";
import uthmanibnfarooq from "../assets/speaker/uif.jpg";
import muftimenk from "../assets/speaker/mufti.jpeg"

function Speakers() {
  const speakersList = [
    {
      speaker: "Omar Suleiman",
      image: omarsuleiman,
    },
    {
      speaker: "Yasir Qadhi",
      image: yasirqadhi,
    },
    {
      speaker: "Belal Assad",
      image: belalassad,
    },
    {
      speaker: "Majed Mahmoud",
      image: majedmahmoud,
    },
    {
      speaker: "Yahya Al-Raaby",
      image: yahyaalraaby,
    },
    {
      speaker: "Ali Hammuda",
      image: alihammuda,
    },
    {
      speaker: "Uthman Ibn Farooq",
      image: uthmanibnfarooq
    },
    {
      speaker: "Mufti Menk",
      image: muftimenk
    }
  ];

  return (
    <>
      {/* <h3>Speakers Featured</h3> */}
      <div className={styles["speakers-div-container"]}>
        {" "}
        {/* Using the CSS module class */}
        {speakersList.map((speakerObj, index) => (
          <div className={styles["speaker-div"]} key={index}>
            {" "}
            {/* Updated to use the CSS module class */}
            <img
              className={styles["speaker-image"]}
              src={speakerObj.image}
              alt={`Profile of ${speakerObj.speaker}`}
            />
            <span className={styles["speaker-name"]}>{speakerObj.speaker}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Speakers;
