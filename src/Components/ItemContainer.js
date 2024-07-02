import React from "react";
import MoreButton from "./MoreButton";
import BackButton from "./BackButton";
import SleepItems from "./SleepItems";

function ItemContainer({ fourItems, getNextItems, getPreviousItems, handleItemClick }) {
  const itemList = fourItems.map(s => (
    <div key={s.id} className="bed-item">
      <SleepItems item={s} handleItemClick={handleItemClick} />
    </div>
  ));

  return (
    <div className="belt">
      <BackButton getPreviousItems={getPreviousItems} />
      {itemList}
      <MoreButton getNextItems={getNextItems} />
    </div>
  );
}

export default ItemContainer;
