const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//GET routes
router.get('/', (req, res) => {
  // Find all feedback and return them
  pool.query('SELECT * FROM "feedback" ORDER BY id DESC;').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error GET /history', error);
    res.sendStatus(500);
  });
}) //end get

//POST
router.post('/', (req, res) => {
  //req.body is all feedback information sent from post on client
  let newFeedback = req.body;
  console.log(`Adding new feedback`, newFeedback);
  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
  //communicate with the database
  pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new feedback in post server`, error);
      res.sendStatus(500);
    });
});//end post 

// DELETE 
router.delete('/:id', (req, res) => {
  //refers to specific id
  let id = req.params.id
  // console.log(id);
  //communicate with database and delete from specific id
  pool.query('DELETE FROM "feedback" WHERE id=$1', [id]).then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('Error DELETE /history', error);
    res.sendStatus(500);
  })
});//end delete



module.exports = router;