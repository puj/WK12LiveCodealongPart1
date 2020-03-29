import React, { useState } from "react";
import { useEffect } from "react";
import { Link} from "react-router-dom";
import {GameThumb} from "./GameThumb.js"

export const GamesList = () => {
  const GAMES_URL = "https://api.rawg.io/api/games?ordering=-rating0";
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch(GAMES_URL, {
      method: "GET"
    })
      .then(res => res.json())
      .then(json => setGames(json.results));
  }, []);

  return (
    <section className="games-list">
        {
             games.map(game =>
                    <Link to={{pathname:`/games/${game.id}`, game:game}}>
                        <GameThumb {...game}/>
                    </Link>
             )
        }
    </section>
  );
};
