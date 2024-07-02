import React from "react";

function MoreButton({ getNextItems }) {
  return (
    <button onClick={getNextItems} style={{ fontSize: "24px", cursor: "pointer" }} className="arrow-button">
   &rarr;
    </button>
  );
}

export default MoreButton;
