import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import axios from 'axios'

class Review extends Component {

  state = {
    feeling: this.props.reduxState.feedbackReducer[0],
    understanding: this.props.reduxState.feedbackReducer[1],
    support: this.props.reduxState.feedbackReducer[2],
    comments: this.props.reduxState.feedbackReducer[3],
  }

  
  goToSubmitted = () => {
      console.log(`Adding feedback`, this.state);
      // TODO - axios request to server to add book
      axios.post( '/feedback', this.state ).then( ( response ) =>{
        console.log( 'back from POST:', response.data );
      }).catch( ( err ) =>{
        console.log( err );
      }) //end axios
    this.props.history.push('/submitted');
  }

  render() {
    const feedback = this.props.reduxState.feedbackReducer;
    console.log(this.props.reduxState);
    
    return (
      <div className="Review">
       <header>
         <h1>Review Your Feedback</h1>
       </header>

       <section>
         <p>Feelings: {feedback[0]}</p>
         <p>Understanding: {feedback[1]}</p>
         <p>Support: {feedback[2]}</p>
         <p>Comments: {feedback[3]}</p>
         <Button onClick={this.goToSubmitted}>Submit</Button>
       </section>
      </div>
    );
  }
}


const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

//export

export default withRouter(connect(putReduxStateOnProps)(Review));


