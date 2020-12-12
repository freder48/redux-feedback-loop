import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
                What comments do you have?
            </Typography>

            <TextField id="standard-basic" label="Comments" onChange={(event) => this.handleChange(event)} type="text" />

            </CardContent>

          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Back
            </Button>
            <Button size="small" color="primary" onClick={this.goToReview}>
              Next
           </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect()(withRouter(Comments));
