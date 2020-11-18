import React from 'react';
import './SeasionDisplay.style.css';
const seasonConfig = {
  Winter: {
    text: 'Burr, it chilly ',
    iconName: 'snowflake',
  },
  Summer: {
    text: "Let's hits the beach",
    iconName: 'sun',
  },
};

const getSeasons = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  } else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
};

const SeasionDisplay = (props) => {
  const season = getSeasons(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasionDisplay;
