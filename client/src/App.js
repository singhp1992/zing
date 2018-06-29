import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/homepage/HomePage'

class App extends Component {
  render() {
    return (
      <Router> 
      <div className="App">
        <nav> 
        <header className="App-header">
          <h1 className="App-title">ZING</h1>
              <div id="navbar">
                <a>Home</a>
                <a>Products</a>
                <a>About Us</a>
                <a>Login</a>
              </div>
        </header>
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
