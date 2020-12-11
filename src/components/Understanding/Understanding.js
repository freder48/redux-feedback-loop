import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

       <form>
         <TextField id="standard-basic" label="Understanding" onChange={(event) => this.handleChange(event)} type="number" min="1" max="5" required/>
         <br/>
         <Button onClick={this.goToSupport}>Next</Button>
       </form>


      </div>
    );
  }
}

export default connect()(withRouter(Understanding));
