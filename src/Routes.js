import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import {
  Home, Registry, Guestbook, RSVP, Story, Gallery,
} from './pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Story">
        <Story />
      </Route>
      <Route path="/Gallery">
        <Gallery />
      </Route>
      <Route path="/Registry">
        <Registry />
      </Route>
      <Route path="/Guestbook">
        <Guestbook />
      </Route>
      <Route path="/RSVP">
        <RSVP />
      </Route>
    </Switch>
  );
}

export default Routes;
