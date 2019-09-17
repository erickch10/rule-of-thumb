import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES_CONFIG } from './config';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {ROUTES_CONFIG.map(({ name, ...routeConfig }) => (
            <Route exact key={name} {...routeConfig}/>
          ))}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
