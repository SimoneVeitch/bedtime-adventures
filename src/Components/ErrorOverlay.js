import React from "react";

function ErrorOverlay() {
  return (
    <div className="error-overlay">
      <div className="error-message">
        <p>You lost the battle and your kid is still awake. <br /><br />
        Refresh the page to start the bedtime process again. <br /><br />
        Better luck next time!</p>
      </div>
    </div>
  );
}

export default ErrorOverlay;