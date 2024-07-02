import React from "react";

function BudgetBox({ budget }) {
  return (
    <div className="budget-box">
      <h3 className="remaining">You have: {budget} points</h3>
    </div>
  );
}

export default BudgetBox;
