import React from "react";
import gifStart from "../gifs/girl_idle_start.gif";
import gifSmile from "../gifs/girl_idle_smile.gif";
import gifAwake from "../gifs/girl_idle_awake.gif";
import gifTired from "../gifs/girl_idle_tired.gif";
import gifAsleep from "../gifs/girl_asleep.gif";

function Bed({ points }) {
  let gifSrc;
  
  if (points === 100) {
    gifSrc = gifAsleep;
  } else if (points === 90) {
    gifSrc = gifTired;
  } else if (points === 80) {
    gifSrc = gifTired;
  } else if (points === 70) {
    gifSrc = gifStart;
  } else if (points === 60) {
    gifSrc = gifStart;
  } else if (points === 50) {
    gifSrc = gifStart;
  } else if (points === 40) {
    gifSrc = gifStart;
  } else if (points === 30) {
    gifSrc = gifSmile;
  } else if (points === 20) {
    gifSrc = gifSmile;
  } else if (points === 10) {
    gifSrc = gifAwake;
  } else {
    gifSrc = gifStart;
  }

  return (
    <div className="bed-container">
      <div className="bed">
        <img src={gifSrc} alt="Animated GIF" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
}


export default Bed;
