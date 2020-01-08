import React from "react";
import GifButton from "./GifButton";

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
    <GifButton handleToggleGif={handleToggleGif} />
  </div>
);

export default Card;
