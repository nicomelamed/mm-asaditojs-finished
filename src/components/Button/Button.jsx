import React from "react";

import "./button.css";

const Button = ({ type, handleToggleGif }) => (
  <button
    type="button"
    className={`button button--${type}`}
    onClick={() => handleToggleGif()}
  >
    <span role="img" aria-label={type}>
      {type === "random" ? "🎲" : "⭐️"}
    </span>
  </button>
);

export default Button;
