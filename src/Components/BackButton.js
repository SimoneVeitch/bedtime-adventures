import React from "react";

function BackButton({ getPreviousItems }) {
  return (
    <button onClick={getPreviousItems} style={{ fontSize: "24px", cursor: "pointer" }} className="arrow-button">
      &larr;
    </button>
  );
}

export default BackButton;
