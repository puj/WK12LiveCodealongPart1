import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {GamesList} from '../components/GamesLists.js'
import {GamesDetails} from "./GamesDetails.js"
import {GenreDetails} from "./GenreDetails.js"

// Video Game Browser

// Step 1: Add two pages
//  a) List of games 
//    Component: GameThumb
//  b) Game details (show rating, image, title, genre)
//    
// Step 2: Add route/switch
// Step 3: Add Nav
//  
// BONUS: Add another page for genre

export const Home = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <div>
              Hello, this home.
            </div>
          </Route>

          <Route path="/games" exact>
            <GamesList />
          </Route>

          <Route path="/games/:slug" exact>
            <GamesDetails />
          </Route>

          <Route path="/genres/:id" exact>
            <GenreDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
};

