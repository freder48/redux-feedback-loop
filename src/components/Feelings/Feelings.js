import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

       <form>
         <TextField id="standard-basic" label="Feeling?" onChange={(event) => this.handleChange(event)} type="number" min="1" max="5" required/>

         <br/>
         <Button onClick={this.goToUnderstanding}>Next</Button>
       </form>


      </div>
    );
  }
}
export default connect()(withRouter(Feelings));
