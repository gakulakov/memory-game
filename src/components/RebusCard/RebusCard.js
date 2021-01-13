import React from "react";
import "./RebusCard.css";
import logo from "../../assets/images/JetRuby.svg";

export const RebusCard = ({
  solved,
  clickHandler,
  flipped,
  type,
  id,
  disabled,
}) => {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      onClick={() => (disabled ? null : clickHandler(id))}
    >
      <div className={"flipper"}>
        <img
          style={{ height: 100, width: 100 }}
          className={flipped ? "front" : "back"}
          src={flipped || solved ? `/img/${type}.png` : logo}
          alt=""
        />
      </div>
    </div>
  );
};
