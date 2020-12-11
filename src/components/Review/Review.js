import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class Review extends Component {

  goToSubmitted = () => {
    this.props.history.push('/submitted');
  }

  render() {
    return (
      <div className="Review">
       <header>
         <h1>Review Your Feedback</h1>
       </header>

       <section>
         Feelings:
         Understanding:
         Support:
         Comments:
         <button onClick={this.goToSubmitted}>Submit</button>
       </section>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

//export

export default withRouter(connect()(Review));


