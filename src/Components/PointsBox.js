import React from "react";

function PointsBox({ points }) {
  return (
    <div className="points-box">
      <h3 className="remaining">Total points: <br /> {points}</h3>
    </div>
  );
}

export default PointsBox;
