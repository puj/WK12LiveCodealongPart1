import { GameDetails } from 'pages/GameDetails';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GameList } from './pages/GameList';
import { GenreDetails } from './pages/GenreDetails';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <GameList />
        </Route>
        <Route path="/games/:slug">
          <GameDetails />
        </Route>
        <Route path="/genres/:id">
          <GenreDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
