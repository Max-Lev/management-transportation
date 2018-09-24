import React, { Component } from 'react';

import './App.css';
import MiniDrawer from './layout/side-nav.layout';
import { BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Router> */}
          <MiniDrawer></MiniDrawer>
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
