import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/homepage/HomePage'
import TopBar from './components/topbar/TopBar'

class App extends Component {
  render() {
    return (
      <Router> 
      <div className="App">
        <nav> 
          <TopBar/>
        </nav>
        <p className="App-intro">
        </p>
          <main style={{ marginTop: 75 }}>
            <Route exact path="/products" component={HomePage} />
          </main> 
      </div>
      </Router>
    );
  }
}

export default App;
