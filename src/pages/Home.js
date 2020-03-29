import React, { useState } from "react";
import { useEffect } from "react";
import { GamesList } from "../components/GamesList.js";
import { GameDetails } from "./GameDetails.js";
import { Nav } from "../components/Nav.js";
import { BrowserRouter,Route, Switch } from "react-router-dom";
export const Home = () => {
  return (
    <BrowserRouter>
      <Nav />
      <main>
          {/* Only render one of these at a time in this section */}
        <Switch>
          <Route path="/" exact>
            <GamesList />
          </Route>

          <Route path="/games/:slug" exact>
            <GameDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};
