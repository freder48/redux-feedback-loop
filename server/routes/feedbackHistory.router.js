const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all feedback that has been submitted
router.get('/', (req, res) => {
    // Find all feedback and return them
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /history', error);
        res.sendStatus(500);  
    });
})

module.exports = router;