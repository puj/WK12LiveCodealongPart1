import React from "react"
import {useParams} from "react-router-dom"

export const GameDetails = () =>{
  const {slug} = useParams();

  return <section className="game-details">{slug}</section>
}