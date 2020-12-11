import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'; 


class Feelings extends Component {

  state = {
    feedback: {
      feelings: ''
    }
    
  }

  goToUnderstanding = () => {
    this.props.dispatch( { type: 'GET_FEEDBACK', payload: this.state.feelings} ) 
    this.props.history.push('/understanding')
  }

  handleChange = (event) => {
    this.setState({
      feelings: event.target.value
    })
  }


  render() {
    return (
      <div className="Feelings">
       <header>
         <h1>How are you feeling today?</h1>
       </header>

       <section>
         <label>Feeling?</label>
         <input onChange={(event) => this.handleChange(event)} type="number" min="1" max="5" required/>
         <button onClick={this.goToUnderstanding}>Next</button>
       </section>


      </div>
    );
  }
}
export default connect()(withRouter(Feelings));
