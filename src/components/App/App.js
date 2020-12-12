import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route,} from 'react-router-dom'; 
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>

        <Router>
          
          
          <Route exact path='/' component={Home}></Route>
          <Route path="/feelings" component={Feelings}></Route>
          <Route path="/understanding" component={Understanding}></Route>
          <Route path="/support" component={Support}></Route>
          <Route path="/comments" component={Comments}></Route>
          <Route path="/review" component={Review}></Route>
          <Route path="/submitted" component={Submitted}></Route>

        </Router>

        <br/>
      </div>
    );
  }
}

export default App;
