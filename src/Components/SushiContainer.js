import React from "react";
import MoreButton from "./MoreButton";
import BackButton from "./BackButton";
import Sushi from "./Sushi";

function SushiContainer({ fourSushis, getNextSushis, getPreviousSushis, handleSushiClick }) {
  const sushiList = fourSushis.map(s => (
    <div key={s.id} className="sushi-item">
      <Sushi sushi={s} handleSushiClick={handleSushiClick} />
    </div>
  ));

  return (
    <div className="belt">
      <BackButton getPreviousSushis={getPreviousSushis} />
      {sushiList}
      <MoreButton getNextSushis={getNextSushis} />
    </div>
  );
}

export default SushiContainer;
