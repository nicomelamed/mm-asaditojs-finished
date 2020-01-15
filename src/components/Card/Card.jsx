import React from "react";

import "./card.css";

const Card = ({ gifUrl, children }) => {
  return (
    <div className="card">
      {gifUrl === "" ? (
        <p className="subtitle">
          <span className="emoji" role="img" aria-label="Cat">
            🐈
          </span>
        </p>
      ) : (
        <img className="mb" src={gifUrl} alt="Cat" />
      )}

      <div className="button-wrapper">{children}</div>
    </div>
  );
};

export default Card;
