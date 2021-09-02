import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shinji from './pages/Shinji';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/shinji">
        <Shinji />
      </Route>
    </Router>
  );
}

export default App;
