/* eslint-disable indent */
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export const GenreDetails = () => {
    const {id} = useParams();
    const GENRE_URL = `https://api.rawg.io/api/genres/${id}`;
    const [genre, setGenre] = useState();

    useEffect(() => {
        fetch(GENRE_URL)
            .then(res => res.json())
            .then(json => setGenre(json))
    }, [GENRE_URL]);

    // Check if things are not okay
    if (!genre) {
        history.pushState('/games');
    }

    // Do things that are okay
    return (
        <section className="game-details">
            <h2>{genre.name}</h2>
            <section className="game-overview">
                <img src={genre.image_background} alt={genre.name} />
                <section className="game-stats">
                    <h3>Games Count: {genre.games_count}</h3>
                    <p>Description: {unescape(genre.description)}</p>
                </section>
            </section>
        </section>
    )
}