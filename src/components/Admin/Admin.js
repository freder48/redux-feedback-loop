import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Admin extends Component {
  state = {
    feedbackHistory: []
  }

componentDidMount() {
    console.log('admin order mounted');
    this.getFeedback()
}

//GET route
 getFeedback = () => {
    axios.get('/feedback')
      .then((response) => {
        this.setState({
          feedbackHistory: response.data
        })
        console.log('back from server', this.state.feedbackHistory);
      })
      .catch((err) => {
        console.log(err);
        alert('problem with GET');
      })
  }

  //DELETE route
  deleteFeedback = (id) => {
    axios.delete(`/feedback/${id}`)
      .then(response => {
        this.getFeedback();
      })
      .catch(error => {
        console.log(`Error removing feedback`, error);
        alert(`Could not remove feedback at this time. Please try again later.`);
      })
  }


  render() {
    return (
      <>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Feelings</TableCell>
                <TableCell>Understanding</TableCell>
                <TableCell>Support</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {
                this.state.feedbackHistory.map((feedback) =>
                  <TableRow key={feedback.id}>
                    <TableCell>{feedback.id}</TableCell>
                    <TableCell>{feedback.feeling}</TableCell>
                    <TableCell>{feedback.understanding}</TableCell>
                    <TableCell>{feedback.support}</TableCell>
                    <TableCell>{feedback.comments}</TableCell>
                    <TableCell><Button variant="outlined">
                    <DeleteIcon onClick={()=> this.deleteFeedback(feedback.id)}/>
                    </Button>
                    </TableCell>


                  </TableRow>
                )
              }

            </TableBody>
          </Table>
        </Paper>

      </>
    );
  }
}

export default withRouter(Admin);