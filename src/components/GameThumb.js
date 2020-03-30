/* eslint-disable camelcase */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'

export const GameThumb = ({slug, name, rating, background_image}) => {
    return (
        // TODO: make a link to the game itself
        <Link to={`/games/${slug}`}>
            <section className="game-thumb">
                {name}
                <div className="game-thumb-image-wrapper">
                    <img
                        className="game-thumb-image"
                        src={background_image}
                        alt={name} />
                    <p className="game-thumb-image-description">{rating}</p>
                </div>

            </section>
        </Link>
    )

}