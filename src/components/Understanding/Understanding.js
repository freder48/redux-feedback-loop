import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'; 


class Understanding extends Component {

  state = {
    feedback: {
      understanding: ''
    }
  }

  goToSupport = () => {
    this.props.dispatch( { type: 'GET_FEEDBACK', payload: this.state.understanding} ) 
    this.props.history.push('/support');
  }

  handleChange = (event) => {
    this.setState({
      understanding: event.target.value
    })
  }


  render() {
    return (
      <div className="understandings">
       <header>
         <h1>How well are you understanding the content?</h1>
       </header>

       <section>
         <label>Understanding?</label>
         <input onChange={(event) => this.handleChange(event)} type="number" min="1" max="5" required/>
         <button onClick={this.goToSupport}>Next</button>
       </section>


      </div>
    );
  }
}

export default connect()(withRouter(Understanding));
