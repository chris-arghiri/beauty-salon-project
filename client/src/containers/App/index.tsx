import React, { FunctionComponent } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from '../Home';
import Gallery from '../Gallery';
import Shop from '../Shop';

import NavigationBar from '../../components/NavigationBar';

interface IAppProps {}

const App: FunctionComponent<IAppProps> = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </Router>
  );
};

export default App;
