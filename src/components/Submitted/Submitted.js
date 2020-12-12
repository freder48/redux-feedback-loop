import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


class Submitted extends Component {

  goToStart = () => {
    this.props.dispatch( { type: 'RESET_FEEDBACK', payload: this.state} ) 
    this.props.history.push('/')
  }

  render() {
    return (
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
      Thank You for Your Feedback!
  </Typography>
  
  </CardContent>

</CardActionArea>
<CardActions>

  <Button size="small" color="primary" onClick={this.goToStart}>
   Leave New Feedback
 </Button>
</CardActions>
</Card>
    );
  }
}

export default withRouter(connect()(Submitted));
