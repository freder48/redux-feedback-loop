import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class Feelings extends Component {

  goToUnderstanding = () => {
    this.props.history.push('/understanding');
  }

  render() {
    return (
      <div className="Feelings">
       <header>
         <h1>How are you feeling today?</h1>
       </header>

       <section>
         <label>Feeling?</label>
         <input type="number" min="1" max="5" required/>
         <button onClick={this.goToUnderstanding}>Next</button>
       </section>


      </div>
    );
  }
}

export default withRouter(Feelings);
