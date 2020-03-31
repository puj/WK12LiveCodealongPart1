import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

export const GameDetails = () => {
  const { slug } = useParams();
  const history = useHistory();
  const GAME_URL = `https://api.rawg.io/api/games/${slug}`;
  const [game, setGame] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    console.log("Fetching game for : " + slug);
    fetch(GAME_URL, {
      method: "GET"
    })
      .then(res => {
        // Check status code in response
        console.log(res.status);
        setStatus(res.status);

        // Only convert this to JSON if we have a successful 200 response
        return res.json();
      })
      .then(json => setGame(json));
  }, [slug]);

  useEffect(() => {
    // If status code is not found, go to homepage
    if (status === 404) {
      history.push("/");
    }
  }, [status]);

  if (!game) {
    return <></>;
  }

  return (
    <section className="game-details">
      <h2>{game.name}</h2>
      <section className="game-overview">
        <img src={game.background_image} alt={game.name}></img>
        <section className="game-stats">
          <h3>Rating: {game.rating}</h3>
          <h3>Genre: {game.genres.map(genre => genre.name).join(" ")}</h3>
        </section>
      </section>
    </section>
  );
};
