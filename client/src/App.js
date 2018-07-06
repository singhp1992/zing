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
          <main style={{ margin: '80px 0 10px 20px' }}>
            <Route exact path="/products" component={HomePage} />
          </main> 
      </div>
      </Router>
    );
  }
}

export default App;
