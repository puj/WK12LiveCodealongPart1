/* eslint-disable indent */
import React, {useEffect, useState} from 'react';
import {GameThumb} from './GameThumb.js'

export const GamesList = () => {
    const GAMES_URL = "https://api.rawg.io/api/games?ordering=-rating0";
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch(GAMES_URL)
            .then(response => response.json())
            .then(json => setGames(json.results))
    })

    return (
        <section className="games-list">
            {
                // Add a link
                games.map(game =>
                    <GameThumb {...game} />
                )
            }
        </section>
    )
};