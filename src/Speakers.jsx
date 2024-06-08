import omarsuleiman from './assets/omar_suleiman_profile.jpg'
import yasirqadhi from './assets/yasir_qadhi_profile.jpg'


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
  ];

  return (
    <>
      <h3>Speakers Featured</h3>
      <div className='speakers-div-container'>
        {speakersList.map((speakerObj, index) => (
          <div className='speaker-div'>
            <img className='speaker-image' src={speakerObj.image} alt="" />
            <span>{speakerObj.speaker}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Speakers;
