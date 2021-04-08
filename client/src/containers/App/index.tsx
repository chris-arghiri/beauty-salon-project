import { FunctionComponent } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from '../Home';
import Gallery from '../Gallery';
import Shop from '../Shop';

import NavigationBar from '../../components/NavigationBar';
import ScrollTopArrow from '../../components/ScrollTopArrow';

interface IAppProps {}

const App: FunctionComponent<IAppProps> = () => {
  return (
    <Router>
      <NavigationBar />
      <ScrollTopArrow />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </Router>
  );
};

export default App;
