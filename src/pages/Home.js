import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GamesList } from "../components/GamesLists.js";
import { GamesDetails } from "./GameDetails.js";

export const Home = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <GamesList />
          </Route>

          <Route path="/games/:slug" exact>
            <GamesDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};
