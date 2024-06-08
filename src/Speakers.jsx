function Speakers() {
  const speakersList = [
    {
      speaker: "Omar Suleiman",
      image: 'later',
    },
    {
      speaker: "Yasir Qadhi",
      image: 'later',
    },
  ];

  return (
    <>
      <h3>Speakers Featured</h3>
      <ul>
        {speakersList.map((speakerObj, index) => (
          <li key={index}>{speakerObj.speaker}</li>
        ))}
      </ul>
    </>
  );
}

export default Speakers;
