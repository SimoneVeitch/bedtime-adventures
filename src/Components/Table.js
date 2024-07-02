import React from "react";

function Table({ eatenSushis, budget }) {
  const emptyPlates = eatenSushis.map((s, index) => (
    <div key={s.id} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const tableClassName = budget == 100 ? "table-sleep" : "table";

  return (
    <div className="table-container">
        <div className={tableClassName}>
    </div>
  </div>
);
}

export default Table;
