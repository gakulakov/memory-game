import {
  RESET_CARDS,
  START_BUTTON,
  OFF_DISABLED,
  FLIP_HANDLER,
  FLIP_BACK,
  ON_SOLVED,
} from "../types";

import { initializeDeck } from "../../initializeDeck";

const initialState = {
  start: false,
  flipped: [],
  cards: initializeDeck(),
  solved: [],
  disabled: false,
};

export const rebusReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_BUTTON:
      return {
        ...state,
        start: action.payload,
      };
    case RESET_CARDS:
      return {
        ...state,
        flipped: initialState.flipped,
        disabled: initialState.disabled,
      };
    case OFF_DISABLED:
      return {
        ...state,
        disabled: action.payload,
      };
    case FLIP_HANDLER:
      return {
        ...state,
        disabled: false,
        flipped: action.payload,
      };
    case FLIP_BACK:
      return {
        ...state,
        flipped: action.payload,
      };
    case ON_SOLVED:
      return {
        ...state,
        solved: action.payload,
      };
    default:
      return state;
  }
};
