import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'; 

class Comments extends Component {
  state = {
    feedback: {
      comments: ''
    }
  }

  goToReview = () => {
    this.props.dispatch( { type: 'GET_FEEDBACK', payload: this.state.comments} ) 
    this.props.history.push('/review');
  }

  handleChange = (event) => {
    this.setState({
      comments: event.target.value
    })
  }


  render() {
    return (
      <div className="comments">
       <header>
         <h1>What comments do you have?</h1>
       </header>

       <section>
         <label>Comments</label>
         <input onChange={(event) => this.handleChange(event)} type="text"/>
         <button onClick={this.goToReview}>Next</button>
       </section>


      </div>
    );
  }
}

export default connect()(withRouter(Comments));
