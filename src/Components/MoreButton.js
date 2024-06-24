import React from "react";

function MoreButton({getSushis}) {

  function handleClick() {
    getSushis();
  }
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;