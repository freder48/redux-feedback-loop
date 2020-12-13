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


class Feelings extends Component {
//local state to store feelings rating
  state = {
    feelings: '',

  }

  // start goToUnderstanding
  goToUnderstanding = () => {
    //disallow empty/out of range inputs
    if (this.state.feelings === '' || this.state.feelings < 1 || this.state.feelings > 5) {
      alert('Please enter a number between 1-5');
      return 'No feelings entered';
    } else {
      //dispatch state to store and then routing to understanding
      this.props.dispatch({ type: 'GET_FEELINGS', payload: this.state.feelings })
      this.props.history.push('/understanding')
    }
  }//end goToUnderstanding

  //start handleChange
  //set local state with input value
  handleChange = (event) => {
    this.setState({
      feelings: event.target.value
    })
  }//end handleChange


  render() {
    return (
      <div>
        <Card className="cardSize">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="emoji"
              height="140"
              image="../../images/emoji.png"
              title="emoji"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                How are you feeling today on a scale of 1-5?
    </Typography>

              <TextField className="inputSize"
                id="standard-basic" label="Feeling?" onChange={(event) => this.handleChange(event)}
                type="number" inputProps={{ min: "1", max: "5" }} required />

            </CardContent>

          </CardActionArea>
          <CardActions className="centerBtn">

            <Button size="small" color="primary" onClick={this.goToUnderstanding}>
              Next
  </Button>
          </CardActions>
        </Card>

      </div>
    );
  }
}


//connect is needed to dispatch to reduxStore, withRouter sends *enhanced* version of Feelings
export default connect()(withRouter(Feelings));
