import React from "react";

const Button = ({ category, onClick }) => {
  return (
    <button
      type="button"
      className={`button button--${category}`}
      onClick={onClick}
    >
      <span role="img" aria-label={category}>
        {category === "random" ? "🎲" : "⭐️"}
      </span>
    </button>
  );
};

export default Button;
