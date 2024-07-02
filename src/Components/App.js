import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import BudgetBox from "./BudgetBox";
import ErrorOverlay from "./ErrorOverlay";

function App() {
  const initialSushis = [
    {
      id: 1,
      name: "Maguro Magic",
      img_url: "./sushi/maguro.png",
      price: 20,
      created_at: "2018-07-27T18:53:16.241Z"
    },
    {
      id: 2,
      name: "Tsundere Ebi",
      img_url: "./sushi/ebi.png",
      price: 15,
      created_at: "2018-07-27T18:53:16.244Z"
    },
    {
      id: 3,
      name: "Oh Sake",
      img_url: "./sushi/sake.png",
      price: 10,
      created_at: "2018-07-27T18:53:16.248Z"
    },
    {
      id: 4,
      name: "Kawaii Tobiko",
      img_url: "./sushi/tobiko.png",
      price: 25,
      created_at: "2018-07-27T18:53:16.251Z"
    },
    {
      id: 5,
      name: "Tsundere Ebi",
      img_url: "./sushi/ebi.png",
      price: 15,
      created_at: "2018-07-27T18:53:16.255Z"
    },
    {
      id: 6,
      name: "Oh Sake",
      img_url: "./sushi/sake.png",
      price: 10,
      created_at: "2018-07-27T18:53:16.258Z"
    },
    {
      id: 7,
      name: "Kawaii Tobiko",
      img_url: "./sushi/tobiko.png",
      price: 25,
      created_at: "2018-07-27T18:53:16.260Z"
    },
    {
      id: 8,
      name: "Tsundere Ebi",
      img_url: "./sushi/ebi.png",
      price: 15,
      created_at: "2018-07-27T18:53:16.264Z"
    },
    {
      id: 9,
      name: "Kawaii Tobiko",
      img_url: "./sushi/tobiko.png",
      price: 10,
      created_at: "2018-07-27T18:53:16.275Z"
    },
    {
      id: 10,
      name: "Tsundere Ebi",
      img_url: "./sushi/ebi.png",
      price: 15,
      created_at: "2018-07-27T18:53:16.279Z"
    },
    {
      id: 11,
      name: "Maguro Magic",
      img_url: "./sushi/maguro.png",
      price: 20,
      created_at: "2018-07-27T18:53:16.282Z"
    }
  ];

  const [sushis, setSushis] = useState(initialSushis.map(s => ({ ...s, eaten: false })));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [eatenSushis, setEatenSushis] = useState([]);
  const [budget, setBudget] = useState(100);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function getNextSushis() {
    const newIndex = (currentIndex + 4) % sushis.length;
    setCurrentIndex(newIndex);
  }

  function getPreviousSushis() {
    const newIndex = (currentIndex - 4 + sushis.length) % sushis.length;
    setCurrentIndex(newIndex);
  }

  function handleSushiClick(e) {
    const eatenSushi = sushis.find(s => s.id === parseInt(e.target.id));
    if (eatenSushi.price <= budget && !eatenSushi.eaten) {
      eatenSushi.eaten = true;
      const emptyPlate = [...eatenSushis, eatenSushi];
      setEatenSushis(emptyPlate);
      const newBudget = budget - eatenSushi.price;
      setBudget(newBudget);
    } else if (budget <= 5) {
      setShowErrorMessage(true);
    }
  }

  const fourSushis = sushis.slice(currentIndex, currentIndex + 4);

  return (
    <div className="app">
      <h1>Bedtime</h1>
      <p>Get your kid to sleep</p>
      {showErrorMessage && <ErrorOverlay message="You've run out of money" />}
      <SushiContainer
        fourSushis={fourSushis}
        getNextSushis={getNextSushis}
        getPreviousSushis={getPreviousSushis}
        handleSushiClick={handleSushiClick}
      />
      <div className="main-content">
      <BudgetBox budget={budget} />
      <Table eatenSushis={eatenSushis} budget={budget}/>
      </div>
    </div>
  );
}

export default App;
