import React from "react";

function MoreButton({ getNextSushis }) {
  return (
    <button onClick={getNextSushis} style={{ fontSize: "24px", cursor: "pointer" }} className="arrow-button">
   &rarr;
    </button>
  );
}

export default MoreButton;
