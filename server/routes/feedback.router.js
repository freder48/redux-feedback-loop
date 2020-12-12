const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//GET routes
router.get('/', (req, res) => {
  // Find all feedback and return them
  pool.query('SELECT * FROM "feedback";').then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log('Error GET /history', error);
      res.sendStatus(500);  
  });
})


//POST

router.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding new feedback`, newFeedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new feedback in post server`, error);
        res.sendStatus(500);
      });
  });

  // DELETE 
router.delete('/:id', (req, res) => {
  let id = req.params.id
  console.log(id);
  
  pool.query('DELETE FROM "feedback" WHERE id=$1', [id]).then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Error DELETE /history', error);
      res.sendStatus(500);
  })
});
  


module.exports = router;