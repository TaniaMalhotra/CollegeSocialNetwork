import React from 'react';

// import onlineIcon from '../../icons/onlineIcon.png';
// import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
    
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">

    </div>
  </div>
);

export default InfoBar;
