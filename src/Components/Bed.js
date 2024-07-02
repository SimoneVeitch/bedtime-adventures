import React from "react";

function Bed({ points }) {
const bedClassName = points === 100 ? "bed-sleep" : "bed";

  return (
    <div className="bed-container">
        <div className={bedClassName}>
    </div>
  </div>
);
}

export default Bed;
