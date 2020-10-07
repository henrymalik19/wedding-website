import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { FlowerOverlay, Navbar, Sidebar } from './components';
import Routes from './Routes';

function App() {
  return (
    <div id="Container">
      <Router>
        <Navbar />
        <FlowerOverlay>
          <Sidebar />
          <Routes />
        </FlowerOverlay>
      </Router>
    </div>
  );
}

export default App;
