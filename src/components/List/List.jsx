import React from "react";

import "./list.css";

const List = ({ favorites }) => {
  return (
    <>
      <div className="list-wrapper">
        <h2>Mi lista de favoritos</h2>
        {!favorites.length ? (
          <p>Aun no has agregado ningun favorito :(</p>
        ) : (
          <ul className="list">
            {favorites.map((url, index) => {
              return (
                <li className="list-item" key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url.slice(0, 30)}...
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default List;
