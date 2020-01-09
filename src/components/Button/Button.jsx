import React from "react";

import "./button.css";

const Button = ({ type, handleToggleGif, addFavoriteGif }) => {
  return (
    <>
      <button
        type="button"
        className={`button button--${type}`}
        onClick={() =>
          type === "random" ? handleToggleGif() : addFavoriteGif()
        }
      >
        <span role="img" aria-label={type}>
          {type === "random" ? "🎲" : "⭐️"}
        </span>
      </button>
    </>
  );
};

export default Button;
