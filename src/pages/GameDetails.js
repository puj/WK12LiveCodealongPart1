import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const GameDetails = () => {
  const { slug } = useParams();
  console.log(slug);
  const GAME_URL = `https://api.rawg.io/api/games/${slug}`;
  const [game, setGame] = useState();

  useEffect(() => {
    console.log("Fetching game for : " + slug);
    fetch(GAME_URL, {
      method: "GET"
    })
      .then(res => res.json())
      .then(json => setGame(json));
  }, [slug]);

  if (!game) {
    return <></>;
  }
  console.log(game);    

  return (
    <section className="game-details">
      <h2>{game.name}</h2>
      <section className="game-overview">
        <img src={game.background_image} alt={game.name}></img>
        <section className="game-stats">
            <h3>Rating: {game.rating}</h3>
            <h3>Genre: {game.genres.map((genre=>genre.name)).join(" ")}</h3>
        </section>
      </section>
    </section>
  );
};
