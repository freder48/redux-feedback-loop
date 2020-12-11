import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class Comments extends Component {

  goToReview = () => {
    this.props.history.push('/review');
  }

  render() {
    return (
      <div className="comments">
       <header>
         <h1>What comments do you have?</h1>
       </header>

       <section>
         <label>Comments</label>
         <input type="text"/>
         <button onClick={this.goToReview}>Next</button>
       </section>


      </div>
    );
  }
}

export default withRouter(Comments);