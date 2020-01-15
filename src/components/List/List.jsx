import React from "react";

import "./list.css";

const List = ({ favorites }) => {
  return (
    <div className="list">
      <h2>Mi lista de favoritos</h2>
      {!favorites.length ? (
        <p>Aun no has agregado ningun favorito :(</p>
      ) : (
        <div className="list-wrapper">
          {favorites.map((url, index) => {
            return (
              <div className="list-item" key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img className="mb" src={url} alt="Favorite Cat" />
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default List;
