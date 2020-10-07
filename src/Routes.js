import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Story from './pages/Story';
import Registry from './pages/Registry';
import Guestbook from './pages/Guestbook';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Story">
        <Story />
      </Route>
      <Route path="/Registry">
        <Registry />
      </Route>
      <Route path="/Guestbook">
        <Guestbook />
      </Route>
    </Switch>
  );
}

export default Routes;
