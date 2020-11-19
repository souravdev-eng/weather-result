import React from 'react';

const Lodder = (props) => {
  return (
    <div className='ui active dimmer'>
      <div className='ui text loader'>{props.loader || 'Loading....'}</div>
    </div>
  );
};
export default Lodder;
