import React from "react";

import "./button.css";

const Button = ({ category, handleToggleGif, addFavoriteGif }) => {
  return (
    <button
      type="button"
      className={`button button--${category}`}
      onClick={() =>
        category === "random" ? handleToggleGif() : addFavoriteGif()
      }
    >
      <span role="img" aria-label={category}>
        {category === "random" ? "🎲" : "⭐️"}
      </span>
    </button>
  );
};

export default Button;
