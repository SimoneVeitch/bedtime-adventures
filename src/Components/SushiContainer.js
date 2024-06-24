import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({fourSushis, getSushis, handleSushiClick}) {
    
  const sushiList = fourSushis.map(s => {
    return <Sushi key={s.id} sushi={s} handleSushiClick={handleSushiClick}/>
  })

  return (
    <div className="belt">
      {sushiList}
      <MoreButton getSushis={getSushis}/>
    </div>
  );
}

export default SushiContainer;