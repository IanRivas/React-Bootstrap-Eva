import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shinji from './pages/Shinji';
import Azuka from './pages/Azuka';
import Rei from './pages/Rei';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/shinji">
        <Shinji />
      </Route>
      <Route exact path="/azuka">
        <Azuka />
      </Route>
      <Route exact path="/rei">
        <Rei />
      </Route>
    </Router>
  );
}

export default App;
