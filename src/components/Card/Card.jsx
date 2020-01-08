import React from "react";
import Button from "../Button/Button";

import "./card.css";

const Card = ({ gifUrl, handleToggleGif }) => (
  <div className="card">
    {gifUrl !== "" ? (
      <img className="gif" src={gifUrl} alt="Cat" />
    ) : (
      <p className="subtitle">
        <span className="emoji" role="img" aria-label="Cat">
          🐈
        </span>
      </p>
    )}

    <div className="button-wrapper">
      <Button type="random" handleToggleGif={handleToggleGif} />
      <Button type="favorite" handleToggleGif={handleToggleGif} />
    </div>
  </div>
);

export default Card;
