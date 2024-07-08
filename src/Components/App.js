import React, { useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";
import Bed from "./Bed";
import PointsBox from "./PointsBox";
import ErrorOverlay from "./ErrorOverlay";
import SuccessOverlay from "./SuccessOverlay";
import Rules from './Rules';

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
      action: 'deduct',
    },
    {
      id: 2,
      name: "Blanket",
      img_url: blanket,
      points: 10,
      action: 'add',
    },
    {
      id: 3,
      name: "Book",
      img_url: book,
      points: 20,
      action: 'add',
    },
    {
      id: 4,
      name: "Cheese",
      img_url: cheese,
      points: 10,
      action: 'deduct',
    },
    {
      id: 5,
      name: "Dog",
      img_url: dog,
      points: 10,
      action: 'add',
    },
    {
      id: 6,
      name: "Game",
      img_url: game,
      points: 10,
      action: 'deduct',
    },
    {
      id: 7,
      name: "Ghost",
      img_url: ghost,
      points: 20,
      action: 'deduct',
    },
    {
      id: 8,
      name: "Horse",
      img_url: horse,
      points: 10,
      action: 'deduct',
    },
    {
      id: 9,
      name: "Icecream",
      img_url: icecream,
      points: 20,
      action: 'deduct',
    },
    {
      id: 10,
      name: "ipad",
      img_url: ipad,
      points: 20,
      action: 'deduct',
    },
    {
      id: 11,
      name: "Light",
      img_url: light,
      points: 10,
      action: 'add',
    },
    {
      id: 12,
      name: "Mask",
      img_url: mask,
      points: 10,
      action: 'add',
    },
    {
      id: 13,
      name: "Microphone",
      img_url: microphone,
      points: 10,
      action: 'deduct',
    },
    {
      id: 14,
      name: "Milk",
      img_url: milk,
      points: 10,
      action: 'add',
    },
    {
      id: 15,
      name: "Paint",
      img_url: paint,
      points: 10,
      action: 'deduct',
    },
    {
      id: 16,
      name: "Pillow",
      img_url: pillow,
      points: 10,
      action: 'add',
    },
    {
      id: 17,
      name: "Robot",
      img_url: robot,
      points: 10,
      action: 'deduct',
    },
    {
      id: 18,
      name: "Music",
      img_url: sleepmusic,
      points: 10,
      action: 'add',
    },
    {
      id: 19,
      name: "Socks",
      img_url: socks,
      points: 10,
      action: 'add',
    },
    {
      id: 20,
      name: "Teddy",
      img_url: teddy,
      points: 20,
      action: 'add',
    }
  ];

  const [items, setItems] = useState(initialItems.map(s => ({ ...s, clicked: false })));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedItems, setClickedItems] = useState([]); 
  const [points, setPoints] = useState(50);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [displayItems, setDisplayItems] = useState(4);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const updateItemsDisplayed = () => {
      if (window.matchMedia("(max-width: 600px)").matches) {
        setDisplayItems(2); 
      } else {
        setDisplayItems(4); 
      }
    };

    updateItemsDisplayed();
    window.addEventListener("resize", updateItemsDisplayed); 

    return () => {
      window.removeEventListener("resize", updateItemsDisplayed);
    };
  }, []);

  useEffect(() => {
    if (points >= 100) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(true);
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [points]);

  function getNextItems() {
    const newIndex = (currentIndex + displayItems) % items.length;
    setCurrentIndex(newIndex);
  }

  function getPreviousItems() {
    const newIndex = (currentIndex - displayItems + items.length) % items.length;
    setCurrentIndex(newIndex);
  }

  function handleItemClick(e) {
    const clickedItem = items.find(s => s.id === parseInt(e.target.id));
    if (!clickedItem.clicked) {
      clickedItem.clicked = true;
      setClickedItems([...clickedItems, clickedItem]); 
      let newPoints;
      if (clickedItem.action === 'add') {
        newPoints = points + clickedItem.points;
      } else if (clickedItem.action === 'deduct') {
        newPoints = points - clickedItem.points;
      }
      setPoints(newPoints);

      if (newPoints <= 5) {
        setShowErrorMessage(true);
      }
      setItems(items.filter(item => item.id !== clickedItem.id));

      const remainingItems = items.filter(item => !item.clicked);
    if (remainingItems.length === 0) {
      setShowErrorMessage(true);
    }
    }
  }

  return (
    <div className="app">
      <h1>BEDTIME ADVENTURES</h1>
      <p className="intro-text">Welcome to "Bedtime Adventures"!<br /><br />
        In this simple game, your mission is clear: gently guide your child into the land of dreams. We all know that achieving this bedtime bliss is a delicate dance of routine and comfort. From cozy blankets to soothing melodies, every item plays a crucial role in setting the stage for a restful night.<br /><br />
        Navigate through the list of sleep-inducing items, each chosen to lull your little one into sweet slumber. But be mindful in your choices, avoiding anything that might spark nighttime energy. It's a game of strategy and care, where success means a peaceful night for both you and your child.<br /><br />
        Are you ready to embark on this bedtime journey? Choose wisely, and may bedtime magic be on your side!</p>
      <Rules />
      {showErrorMessage && <ErrorOverlay />}
      {showSuccessMessage && <SuccessOverlay />}
      <ItemContainer
       items={items.slice(currentIndex, currentIndex + displayItems)}
       getNextItems={getNextItems}
       getPreviousItems={getPreviousItems}
       handleItemClick={handleItemClick}
      />
      <div className="main-content">
        <PointsBox points={points} />
        <Bed clickedItems={clickedItems} points={points}/>
      </div>
    </div>
  );
}

export default App;
