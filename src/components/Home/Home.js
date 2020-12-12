import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Card className="cardSize">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Colorful Checkmark Banner"
              height="140"
              image="../../images/home.png"
              title="Colorful Checkmark Banner"
            />

            <CardContent>
              <Typography gutterBottom variant="h3" component="h2">
                Home
            </Typography>
            </CardContent>

          </CardActionArea>
          <CardActions>
            <Link to='/feelings'className="centerBtn startFeedback">Start Feedback</Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Home;
