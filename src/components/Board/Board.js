import React from "react";
import "./Board.css";
import RebusCard from "../RebusCard/RebusCard";
import { connect } from "react-redux";

import {
  offDisabled,
  flipHandler,
  resetCards,
  flipBack,
  onSolved,
} from "../../redux/actions/action";

const Board = ({
  start,
  solved,
  disabled,
  cards,
  flipped,
  offDisabled,
  flipHandler,
  resetCards,
  flipBack,
  onSolved,
}) => {
  const sameCardClicked = (id) => {
    flipped.includes(id);
  };

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

  const clickHandler = (id) => {
    offDisabled();
    if (flipped.length === 0) {
      flipHandler(flipped, id);
    } else {
      if (sameCardClicked(flipped, id)) return;
      flipBack(flipped, id);
      if (isMatch(id)) {
        onSolved(solved, flipped, id);
        resetCards();
      } else {
        setTimeout(resetCards, 1000);
      }
    }
  };

  return !start ? null : solved.length === 16 ? (
    <h1 className={"title"}>Congratulations!</h1>
  ) : (
    <div className={"board"}>
      {cards.map((card) => (
        <RebusCard
          key={card.id}
          id={card.id}
          type={card.type}
          solved={solved.includes(card.id)}
          flipped={flipped.includes(card.id)}
          clickHandler={() => clickHandler(card.id)}
          disabled={disabled || solved.includes(card.id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    solved: state.rebus.solved,
    disabled: state.rebus.disabled,
    cards: state.rebus.cards,
    flipped: state.rebus.flipped,
    clickHandler: state.rebus.clickHandler,
    start: state.rebus.start,
  };
};

const mapDispatchToProps = {
  offDisabled,
  flipHandler,
  resetCards,
  flipBack,
  onSolved,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
