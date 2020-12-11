import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom'; 
import Feelings from '../Feelings/Feelings';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>

        <Router>
          
          <Link to='/feelings'>Start Feedback</Link>
          <Route path="/feelings" component={Feelings}></Route>

        </Router>

        <br/>
      </div>
    );
  }
}

export default App;
