import { RESET_CARDS, START_BUTTON, OFF_DISABLED, FLIP_HANDLER, FLIP_BACK, ON_SOLVED } from "../types";


export function startButton() {
  return {
    type: START_BUTTON,
    payload: true,
  };
}

export function resetCards() {
  return {
    type: RESET_CARDS,
  };
}

export function offDisabled() {
    return{
        type: OFF_DISABLED,
        payload: true
    }
}

export function flipHandler(flipped, id) {
    return{
        type: FLIP_HANDLER,
        payload: [...flipped, id]
    }
}

export function flipBack(flipped, id) {
    return{
        type: FLIP_BACK,
        payload: [flipped[0], id]
    }
}

export function onSolved(solved, flipped, id) {
    return{
        type: ON_SOLVED,
        payload: [...solved, flipped[0], id]
    }
}

