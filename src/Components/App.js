import React, { useState } from "react";
import ItemContainer from "./ItemContainer";
import Bed from "./Bed";
import PointsBox from "./PointsBox";
import ErrorOverlay from "./ErrorOverlay";

import ball from "../sleep_items/ball.png"
import blanket from "../sleep_items/blanket.png"
import book from "../sleep_items/book.png"
import cheese from "../sleep_items/cheese.png"
import dog from "../sleep_items/dog.png"
import game from "../sleep_items/game.png"
import ghost from "../sleep_items/ghost.png"
import horse from "../sleep_items/horse.png"
import icecream from "../sleep_items/icecream.png"
import ipad from "../sleep_items/ipad.png"
import light from "../sleep_items/light.png"
import mask from "../sleep_items/mask.png"
import microphone from "../sleep_items/microphone.png"
import milk from "../sleep_items/milk.png"
import paint from "../sleep_items/paint.png"
import pillow from "../sleep_items/pillow.png"
import robot from "../sleep_items/robot.png"
import sleepmusic from "../sleep_items/sleepmusic.png"
import socks from "../sleep_items/socks.png"
import teddy from "../sleep_items/teddy.png"

function App() {
  const initialItems = [
    {
      id: 1,
      name: "Ball",
      img_url: ball,
      points: 10,
    },
    {
      id: 2,
      name: "Blanket",
      img_url: blanket,
      points: 10,
    },
    {
      id: 3,
      name: "Book",
      img_url: book,
      points: 10,
    },
    {
      id: 4,
      name: "Cheese",
      img_url: cheese,
      points: 10,
    },
    {
      id: 5,
      name: "Dog",
      img_url: dog,
      points: 10,
    },
    {
      id: 6,
      name: "Game",
      img_url: game,
      points: 10,
    },
    {
      id: 7,
      name: "Ghost",
      img_url: ghost,
      points: 10,
    },
    {
      id: 8,
      name: "Horse",
      img_url: horse,
      points: 10,
    },
    {
      id: 9,
      name: "Icecream",
      img_url: icecream,
      points: 10,
    },
    {
      id: 10,
      name: "ipad",
      img_url: ipad,
      points: 10,
    },
    {
      id: 11,
      name: "Light",
      img_url: light,
      points: 10,
    },
    {
      id: 12,
      name: "Mask",
      img_url: mask,
      points: 10,
    },
    {
      id: 13,
      name: "Microphone",
      img_url: microphone,
      points: 10,
    },
    {
      id: 14,
      name: "Milk",
      img_url: milk,
      points: 10,
    },
    {
      id: 15,
      name: "Paint",
      img_url: paint,
      points: 10,
    },
    {
      id: 16,
      name: "Pillow",
      img_url: pillow,
      points: 10,
    },
    {
      id: 17,
      name: "Robot",
      img_url: robot,
      points: 10,
    },
    {
      id: 18,
      name: "Music",
      img_url: sleepmusic,
      points: 10,
    },
    {
      id: 19,
      name: "Socks",
      img_url: socks,
      points: 10,
    },
    {
      id: 20,
      name: "Teddy",
      img_url: teddy,
      points: 10,
    }
  ];

  const [items, setItems] = useState(initialItems.map(s => ({ ...s, clicked: false })));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedItems, setClickedItems] = useState([]); // Initialize as an array
  const [points, setPoints] = useState(50);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function getNextItems() {
    const newIndex = (currentIndex + 4) % items.length;
    setCurrentIndex(newIndex);
  }

  function getPreviousItems() {
    const newIndex = (currentIndex - 4 + items.length) % items.length;
    setCurrentIndex(newIndex);
  }

  function handleItemClick(e) {
    const clickedItem = items.find(s => s.id === parseInt(e.target.id));
    if (clickedItem.points <= points && !clickedItem.clicked) {
      clickedItem.clicked = true;
      setClickedItems([...clickedItems, clickedItem]); // Correctly update the array
      const newPoints = points - clickedItem.points;
      setPoints(newPoints);
    } else if (points <= 5) {
      setShowErrorMessage(true);
    }
  }

  const fourItems = items.slice(currentIndex, currentIndex + 4);

  return (
    <div className="app">
      <h1>Bedtime</h1>
      <p>Get your kid to sleep</p>
      {showErrorMessage && <ErrorOverlay message="You've run out of money" />}
      <ItemContainer
        fourItems={fourItems}
        getNextItems={getNextItems}
        getPreviousItems={getPreviousItems}
        handleItemClick={handleItemClick}
      />
      <div className="main-content">
        <PointsBox points={points} />
        <Bed clickedItems={clickedItems} points={points}/> {/* Correctly pass the clickedItems */}
      </div>
    </div>
  );
}

export default App;
