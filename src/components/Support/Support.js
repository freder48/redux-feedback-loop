import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Support extends Component {

  state = {
  support: '',
  }

  goToComments = () => {
    if (this.state.support === ''){
      alert('Please enter a number between 1-5');
      return 'No support entered';
    } else {
    this.props.dispatch( { type: 'GET_FEEDBACK', payload: this.state.support} ) 
    this.props.history.push('/comments');
  }
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

       <form className="form">
         <TextField id="standard-basic" label="Supported" onChange={(event) => this.handleChange(event)} type="number" min="1" max="5" required />
         <br/>
         <Button onClick={this.goToComments}>Next</Button>
       </form>


      </div>
    );
  }
}

export default connect()(withRouter(Support));
