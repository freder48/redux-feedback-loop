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

class Admin extends Component {



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
                this.props.feedbackHistory.map((feedback) =>
                  <TableRow key={feedback.id}>
                    <TableCell>{feedback.feeling}</TableCell>
                    <TableCell>{feedback.understanding}</TableCell>
                    <TableCell>{feedback.support}</TableCell>
                    <TableCell>{feedback.comments}</TableCell>
                    <TableCell><Button variant="outlined" href="#outlined-buttons">
                    <DeleteIcon/>
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