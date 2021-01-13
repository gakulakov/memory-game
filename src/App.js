import "./App.css";
import { useEffect, useState } from "react";
import { StartButton } from "./components/StartButton/StartButton";
import { Board } from "./components/Board/Board";
import { initializeDeck } from "./initializeDeck";

function App() {
  const [start, setStart] = useState(false);

  const [flipped, setFlipped] = useState([]);
  const [cards, setCards] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setCards(initializeDeck());
  }, []);

  const startOn = () => {
    setStart(true);
  };

  const sameCardClicked = (id) => {
    flipped.includes(id)
  }

  const isMatch = (id) => {
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }
  
  const clickHandler = (id) => {
    setDisabled(true)
    if (flipped.length === 0){
      setFlipped([...flipped, id]) 
      setDisabled(false)
    } else {
      if(sameCardClicked(flipped, id)) return
      setFlipped([flipped[0], id])
      if(isMatch(id)){
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 1000)
      }
    }
  };


  console.log(solved);
  
  return (
    <div className="App">
      <h1 className={"title"}>Test Task for JetRuby</h1>

      {!start ? (
        <div className={"start"}>
          <StartButton startOn={startOn} start={start} />
        </div>
      ) : (
        <div className={"card-container"}>
          <Board
            cards={cards}
            flipped={flipped}
            clickHandler={clickHandler}
            disabled={disabled}
            solved={solved}
          />
        </div>
      )}
    </div>
  );
}

export default App;
