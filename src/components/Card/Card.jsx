import React from "react";
import Button from "../Button/Button";

import "./card.css";

const Card = ({ gifUrl, handleToggleGif, addFavoriteGif }) => {
  return (
    <div className='card'>
      {gifUrl === "" ? (
        <p className='subtitle'>
          <span className='emoji' role='img' aria-label='Cat'>
            🐈
          </span>
        </p>
      ) : (
        <img className='gif' src={gifUrl} alt='Cat' />
      )}

      <div className='button-wrapper'>
        <Button type='random' handleToggleGif={handleToggleGif} />
        <Button type='favorite' addFavoriteGif={addFavoriteGif} />
      </div>
    </div>
  );
};

export default Card;
