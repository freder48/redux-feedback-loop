import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Home extends Component {
  render() {
    return (
      <div className="Home">
       <header>
         <h1>Home</h1>
       </header>

       <Link to='/feelings'>Start Feedback</Link>

      </div>
    );
  }
}

export default Home;
