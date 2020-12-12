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

  goToComments = () => {
    if (this.state.support === '') {
      alert('Please enter a number between 1-5');
      return 'No support entered';
    } else {
      this.props.dispatch({ type: 'GET_FEEDBACK', payload: this.state.support })
      this.props.history.push('/comments');
    }
  }

  handleChange = (event) => {
    this.setState({
      support: event.target.value
    })
  }

  goBackToUnderstanding = () => {
    this.props.dispatch({ type: 'GET_FEEDBACK1', payload: this.state.support })
    this.props.history.push('/understanding');
  }

  render() {
    return (
      <div className="support">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="../../images/goat_small.jpg"
              title="Contemplative Reptile"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                How well are you being supported?
            </Typography>

              <TextField id="standard-basic" label="Supported" onChange={(event) => this.handleChange(event)} type="number" min="1" max="5" required />

            </CardContent>

          </CardActionArea>
          <CardActions>
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
