import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


class Submitted extends Component {

  goToStart = () => {
    this.props.dispatch({ type: 'RESET_FEEDBACK', payload: this.state })
    this.props.history.push('/')
  }

  render() {
    return (
      <Card className="cardSize">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Thank You in Different Languages"
            height="140"
            image="../../images/thanks.jpg"
            title="Thank You Languages"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className="thankYou">
              Thank You for Your Feedback!
            </Typography>

          </CardContent>

        </CardActionArea>
        <CardActions className="centerBtn feedbackBtn">

          <Button size="small" color="primary" onClick={this.goToStart}>
            Leave New Feedback
        </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withRouter(connect()(Submitted));
