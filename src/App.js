import React, { useState } from "react";
import Title from "./components/Title";
import Card from "./components/Card";

import "./App.css";

const App = () => {
  const [gifUrl, setGifUrl] = useState("");

  const getRandomGif = () => {
    const url =
      "https://api.giphy.com/v1/gifs/random?api_key=gH7glaXpjdIJUfGdtE2GO5FSQzi09bbY&tag=Cat&rating=G";

    fetch(url)
      .then(data => data.json())
      .then(response => {
        setGifUrl(response.data.fixed_height_downsampled_url);
      });
  };

  const handleToggleGif = () => {
    getRandomGif();
  };

  return (
    <div className="wrapper">
      <Title />
      <Card gifUrl={gifUrl} handleToggleGif={handleToggleGif} />
    </div>
  );
};

export default App;
