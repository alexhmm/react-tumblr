import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Posts from './posts/pages/posts/Posts.page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/page/:pageNumber'>
          <Posts />
        </Route>
        <Route path='/post/:postId/:caption'>
          <Posts />
        </Route>
        <Route path='/post/:postId'>
          <Posts />
        </Route>
        <Route path='/tagged/:tag/page/:pageNumber'>
          <Posts />
        </Route>
        <Route path='/tagged/:tag'>
          <Posts />
        </Route>
        <Route path='/'>
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
