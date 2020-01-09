import React from "react";

import "./list.css";

const List = ({ favorites }) => {
  return (
    <>
      <h2>Mi lista de favoritos</h2>
      {!favorites.length ? (
        <p>Aun no has agregado ningun favorito :(</p>
      ) : (
        <ul className='list'>
          {favorites.map((url, index) => {
            return (
              <li className='list-item' key={index}>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                  {url}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default List;
