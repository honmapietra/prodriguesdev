import React from 'react';
import {
  Switch,
  Route,
  useLocation,
  useRouteMatch
} from 'react-router-dom';
import Page from './components/../page';
import { pages } from './constants/pages'

import './App.css';


import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (

    <div className="App">
      <Header pages={pages} />
      <Switch>
        {pages.map((page) => {
          return (
            <Route
              exact
              path={`/${page.url}`}
              key={`${page.title}/${page.url}`}
            >
              <Page page={page} />
            </Route>
          )
        })}
      </Switch>
      <Footer />
    </div>
  )
}

export default App;

