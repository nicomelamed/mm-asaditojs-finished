import React from "react";

import "./list.css";

const List = ({ favorites }) => {
  return (
    <div className="list">
      <h2>Mi lista de favoritos</h2>
      {favorites.length === 0 ? (
        <p>Aun no has agregado ningun favorito :(</p>
      ) : (
        <div className="list-wrapper">
          {favorites.map(url => {
            return (
              <div className="list-item" key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img className="margin-bottom" src={url} alt="Favorite Cat" />
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
