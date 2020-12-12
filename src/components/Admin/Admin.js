import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


function Admin(props) {
  const { classes } = props;
  return (
    <>
      <h2>Feedback Results</h2>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Feeling</CustomTableCell>
              <CustomTableCell>Understanding</CustomTableCell>
              <CustomTableCell>Support</CustomTableCell>
              <CustomTableCell>Comments</CustomTableCell>
              <CustomTableCell>Delete</CustomTableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {props.list.map(item =>
              <TableRow className={classes.row} key={item.id}>
                <CustomTableCell component="th" scope="row">
                  {item.name}
                </CustomTableCell>
                <CustomTableCell align="right">{item.quantity} {item.measure}</CustomTableCell>
                <CustomTableCell>
                  <Button variant="outlined" href="#outlined-buttons" className={classes.button}
                    onClick={() => props.editItem(item)}>
                    <EditIcon className={classes.leftIcon} />
                  Edit</Button>
                  <Button
                    variant="outlined" href="#outlined-buttons"
                    className={classes.button}
                    onClick={() => props.deleteItem(item.id)}>
                    <DeleteIcon className={classes.leftIcon} />
                  Delete</Button>
                </CustomTableCell>
              </TableRow>
            )}
          </TableBody> */}
        </Table>
      </Paper>

    </>
  );
}

export default withStyles(styles)(Admin);

