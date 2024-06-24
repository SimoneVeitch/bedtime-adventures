import React from "react";

function ErrorOverlay({ message }) {
  return (
    <div className="error-overlay">
      <div className="error-message">{message}</div>
    </div>
  );
}

export default ErrorOverlay;