import React from 'react';
import './SeasionDisplay.style.css';
const seasonConfig = {
  winter: {
    text: 'Burr, it chilly ',
    iconName: 'snowflake',
  },
  summer: {
    text: "Let's hits the beach",
    iconName: 'sun',
  },
};

const getSeasons = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasionDisplay = (props) => {
  const season = getSeasons(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasionDisplay;
