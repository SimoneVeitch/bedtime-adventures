import React from "react";

function SleepItems({ item, handleItemClick }) {
  return (
    <div className="items">
      <div onClick={handleItemClick}>
        {item.clicked ? null : (
          <img
            id={item.id}
            src={item.img_url}
            alt={item.name}
            width="100%"
          />
        )}
      </div>
    </div>
  );
}

export default SleepItems;
