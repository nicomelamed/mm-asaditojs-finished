import React from "react";

const GifButton = ({ handleToggleGif }) => (
  <button
    type="button"
    className="button button--dice"
    onClick={() => handleToggleGif()}
  >
    <span role="img" aria-label="dice">
      🎲
    </span>
  </button>
);

export default GifButton;
