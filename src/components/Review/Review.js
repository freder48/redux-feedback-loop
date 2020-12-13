import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class Review extends Component {
//set local state using info from redux stores
  state = {
    feeling: this.props.reduxState.feelingsReducer,
    understanding: this.props.reduxState.understandingReducer,
    support: this.props.reduxState.supportReducer,
    comments: this.props.reduxState.commentsReducer,
  }//end state

  //start POST
  goToSubmitted = () => {
    console.log(`Adding feedback`, this.state);
    //send this.state to server to store in database
    axios.post('/feedback', this.state).then((response) => {
      console.log('back from POST:', response.data); //getting the okay
    }).catch((err) => {
      console.log(err);
    }) //end axios
    //go to submitted on button click
    this.props.history.push('/submitted');
  } //end goToSubmitted


  render() {
    const feedback = this.props.reduxState
    // console.log(this.props.reduxState);

    return (
      <div className="Review">
        <Card className="cardSize">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Colorful Checkmark Banner"
              height="140"
              image="../../images/checkmark.jpg"
              title="Colorful Checkmark Banner"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Review Your Feedback
              </Typography>
              <p>Feelings: {feedback.feelingsReducer}</p>
              <p>Understanding: {feedback.understandingReducer}</p>
              <p>Support: {feedback.supportReducer}</p>
              <p>Comments: {feedback.commentsReducer}</p>

            </CardContent>

          </CardActionArea>
          <CardActions className="centerBtn">

            <Button size="small" color="primary" onClick={this.goToSubmitted}>
              Submit
            </Button>
          </CardActions>
        </Card>

      </div>
    );
  }//end render
} //end class

//We need to pass a method so we can state what values from the store to put on props
const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

//Pass in the method, to put redux state on props
export default withRouter(connect(putReduxStateOnProps)(Review));

