import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Comments extends Component {
  state = {
   comments: ''
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

       <form className="form">
         <TextField id="standard-basic" label="Comments" onChange={(event) => this.handleChange(event)} type="text" />
         <br/>
         <Button onClick={this.goToReview}>Next</Button>
       </form>


      </div>
    );
  }
}

export default connect()(withRouter(Comments));
