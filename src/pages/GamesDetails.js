/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

export const GamesDetails = () => {
  const { slug } = useParams();
  const GAMES_URL = `https://api.rawg.io/api/games/${slug}`;
  const history = useHistory();
  const [game, setGame] = useState();
  const [statusCode, setStatusCode] = useState(200);

  useEffect(() => {
    fetch(GAMES_URL)
      .then(res => {
        setStatusCode(res.status);
        return res.json();
      })
      .then(json => setGame(json));
  }, [GAMES_URL, slug]);

  useEffect(() => {
    console.log(`Status code: ${statusCode}`);
    if (statusCode !== 200) {
      // Do something here to avoid showing an error to the user
      history.push("/games");
    }
  }, [history, statusCode]);

  if (!game) {
    return <></>;
  }

  return (
    <section className="game-details">
      <h2>{game.name}</h2>
      <section className="game-overview">
        <img src={game.background_image} alt={game.name} />
        <section className="game-stats">
          <h3>Rating: {game.rating}</h3>
          <h3>
            Genre:{" "}
            {game.genres.map(genre => {
              return <Link to={`/genres/${genre.id}`}>{genre.name} </Link>;
            })}
          </h3>
        </section>
      </section>
    </section>
  );
};
