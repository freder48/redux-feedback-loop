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
import '../App/App.css'

class Understanding extends Component {

  state = {
   understanding: ''
  }

  goToSupport = () => {
    if (this.state.understanding === ''){
      alert('Please enter a number between 1-5');
      return 'No understandings entered';
    } else {
    this.props.dispatch( { type: 'GET_FEEDBACK', payload: this.state.understanding} ) 
    this.props.history.push('/support');
  }
}

  handleChange = (event) => {
    this.setState({
      understanding: event.target.value
    })
  }

  goBackToFeelings = () => {
    this.props.history.push('/feelings');
    this.props.dispatch( { type: 'EDIT_FEEDBACK0', payload: this.state.understanding} ) 
  }


  render() {
    return (
      <div className="understandings">
 
<Card className="cardSize">
<CardActionArea>
  <CardMedia
    component="img"
    alt="Cartoon People Thinking"
    height="140"
    image="../../images/brain.png"
    title="Cartoon People Thinking"
  />
  
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      How well are you understanding the content?
    </Typography>
   
    <TextField className="inputSize"id="standard-basic" label="Understanding" 
    onChange={(event) => this.handleChange(event)} type="number" min="1" max="5" required 
    inputProps={{ min: "1", max: "5"}}/>
    
  </CardContent>

</CardActionArea>
<CardActions className="centerBtn">
  <Button size="small" color="primary" onClick={this.goBackToFeelings}>
    Back
  </Button>
  <Button size="small" color="primary" onClick={this.goToSupport}>
    Next
  </Button>
</CardActions>
</Card>

      </div>
    );
  }
}

export default connect()(withRouter(Understanding));
