import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Show from './components/show/Show';

import RTLIcon from './assets/images/RTL_Nederland.svg';
import './App.scss';

function App() {
  // Can be obtained from API but hardcoded for brevity
  const shows = [
    { id: 'tt0175058', name: 'The Powerpuff Girls' },
    { id: 'powerrangers', name: 'Power Rangers mystic force' },
    { id: 'timonandpumba', name: 'Hakuna matata' },
    { id: 'tomandjerry', name: 'Tom and Jerry' },
  ];

  return (
    <Router basename="/tv-shows">
      <Fragment>
        <h1 className="header">
          <Link to="/">
            <img src={RTLIcon} alt="RTL" className="header__logo" />
          </Link>
        </h1>

        <Switch>
          <Route path="/show-details/:showId">
            <Show />
          </Route>
          <Route exact path="/">
            <div className="shows">
              {shows.map(({ id, name }) => (
                <Link key={id} to={`/show-details/${id}`} className="show">
                  {name}
                </Link>
              ))}
            </div>
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
