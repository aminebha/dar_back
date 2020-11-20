var express = require('express');
var router = express.Router();
const db= require('../DB_access/DB_user');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.login('amine','amine').then((results) => {
    res.json(results)
  })
});

module.exports = router;
