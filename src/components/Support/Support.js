import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


class Support extends Component {

  state = {
    support: '',
  }

  //start gotocomments
  goToComments = () => {
     //disallow empty/out of range inputs
    if (this.state.support === '' || (this.state.support < 1 || this.state.support > 5)) {
      alert('Please enter a number between 1-5');
      return 'No support entered';
    } else {
      //dispatch state to store and then routing to comments
      this.props.dispatch({ type: 'GET_SUPPORT', payload: this.state.support })
      this.props.history.push('/comments');
    }
  }//end goToComments

  //start handleChange
  //set local state with info from input
  handleChange = (event) => {
    this.setState({
      support: event.target.value
    })
  }//end handleChange

  //start goBackToUnderstanding
  //back button to return to understanding and edit
  goBackToUnderstanding = () => {
    this.props.history.push('/understanding');
  }//end goBackToUnderstanding

  render() {
    return (
      <div className="support">
        <Card className="cardSize">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Cartoon People Holding Hands"
              height="140"
              image="../../images/holdinghands.jpg"
              title="Cartoon People Holding Hands"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                How supported do you feel?
            </Typography>

              <TextField className="inputSize" id="standard-basic" label="Supported" onChange={(event) => this.handleChange(event)}
                type="number" inputProps={{ min: "1", max: "5" }} required />

            </CardContent>

          </CardActionArea>
          <CardActions className="centerBtn">
            <Button size="small" color="primary" onClick={this.goBackToUnderstanding}>
              Back
            </Button>
            <Button size="small" color="primary" onClick={this.goToComments}>
              Next
           </Button>
          </CardActions>
        </Card>

      </div>
    );
  }
}

export default connect()(withRouter(Support));
