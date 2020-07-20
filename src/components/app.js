import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, NavLink,Router, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';

import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

function App() {
  const [count, setCount] = useState(0);
  return (
      <Router history={history}>
        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>

          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home />}
            />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
  )
}

export default connect()(App)
