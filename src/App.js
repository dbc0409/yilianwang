import React, { Component } from 'react';
import './App.css';
// import Top from './Component/Top/Top';
// import Left from './Component/Left/Left';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
