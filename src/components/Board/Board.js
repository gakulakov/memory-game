import React from "react";
import "./Board.css";

import {RebusCard} from "../RebusCard/RebusCard";

export const Board = ({ solved, disabled, cards, flipped, clickHandler }) => {
  return (
    <div className={"board"}>
      {cards.map((card) => (
        <RebusCard
          key={card.id}
          id={card.id}
          type={card.type}
          solved={solved.includes(card.id)}
          flipped={flipped.includes(card.id)}
          clickHandler={clickHandler}
          disabled={disabled || solved.includes(card.id)}
        />
      ))}
    </div>
  );
};
