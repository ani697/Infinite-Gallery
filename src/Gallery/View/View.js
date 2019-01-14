import React from 'react';
import './View.css';

const View = (props) =>{
  return(
    <div className="View">
          <span id="ViewText" onClick={props.GridClick} >Grid View</span>
          <br/>
          <br/>
          <span id="ViewText" onClick={props.ListClick}>List </span>
    </div>
  );
};

export default View;
