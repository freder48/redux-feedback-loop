import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class Support extends Component {

  goToComments = () => {
    this.props.history.push('/comments');
  }

  render() {
    return (
      <div className="support">
       <header>
         <h1>How well are you being supported?</h1>
       </header>

       <section>
         <label>Support?</label>
         <input type="number" min="1" max="5" required/>
         <button onClick={this.goToComments}>Next</button>
       </section>


      </div>
    );
  }
}

export default withRouter(Support);
