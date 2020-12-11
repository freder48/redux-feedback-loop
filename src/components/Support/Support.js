import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'; 

class Support extends Component {

  state = {
    feedback: {
      support: ''
    }
  }

  goToComments = () => {
    this.props.dispatch( { type: 'GET_FEEDBACK', payload: this.state.support} ) 
    this.props.history.push('/comments');
  }

  handleChange = (event) => {
    this.setState({
      support: event.target.value
    })
  }

  render() {
    return (
      <div className="support">
       <header>
         <h1>How well are you being supported?</h1>
       </header>

       <section>
         <label>Support?</label>
         <input onChange={(event) => this.handleChange(event)} type="number" min="1" max="5" required/>
         <button onClick={this.goToComments}>Next</button>
       </section>


      </div>
    );
  }
}

export default connect()(withRouter(Support));
