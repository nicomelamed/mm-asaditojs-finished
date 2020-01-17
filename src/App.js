import React, { useState } from "react";
import Title from "./components/Title";
import Card from "./components/Card";
import List from "./components/List";

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

  const addFavoriteGif = () => {
    if (!gifUrl) return;

    if (!favorites.includes(gifUrl)) {
      setFavorites([...favorites, gifUrl]);
    }
  };

  return (
    <div className="main-wrapper">
      <Title text="pick your favorite gif cat" />

      <Card
        gifUrl={gifUrl}
        getRandomGifUrl={getRandomGifUrl}
        addFavoriteGif={addFavoriteGif}
      />

      <List favorites={favorites} />
    </div>
  );
};

export default App;
