import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class Submitted extends Component {

  goToStart = () => {
    this.props.dispatch( { type: 'RESET_FEEDBACK', payload: this.state} ) 
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="Submitted">
       <header>
         <h1>Thank You for Your Feedback!</h1>
       </header>

       <section>
         <Button onClick={this.goToStart}>Leave New Feedback</Button>
       </section>
      </div>
    );
  }
}

export default withRouter(connect()(Submitted));
