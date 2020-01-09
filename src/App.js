import React, { useState } from "react";
import Title from "./components/Title/Title";
import Card from "./components/Card/Card";
import List from "./components/List/List";

import "./App.css";

const App = () => {
  const [gifUrl, setGifUrl] = useState("");
  const [favorites, setFavorites] = useState([]);

  const getRandomGifUrl = () => {
    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=gH7glaXpjdIJUfGdtE2GO5FSQzi09bbY&tag=Cat&rating=G"
    )
      .then(data => data.json())
      .then(response => {
        setGifUrl(response.data.fixed_height_downsampled_url);
      });
  };

  const handleToggleGif = () => {
    getRandomGifUrl();
  };

  const addFavoriteGif = () => {
    if (!gifUrl) return;

    if (!favorites.includes(gifUrl)) {
      setFavorites(favorites.concat(gifUrl));
    }
  };

  return (
    <div className='wrapper'>
      <Title />
      <Card
        gifUrl={gifUrl}
        handleToggleGif={handleToggleGif}
        addFavoriteGif={addFavoriteGif}
      />
      <List favorites={favorites} />
    </div>
  );
};

export default App;
