import React from "react";

function BackButton({ getPreviousSushis }) {
  return (
    <button onClick={getPreviousSushis} style={{ fontSize: "24px", cursor: "pointer" }} className="arrow-button">
      &larr;
    </button>
  );
}

export default BackButton;
