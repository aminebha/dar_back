var express = require('express');
var router = express.Router();
const db= require('../DB_access/DB_user');

router.get('/login', (req,res,next) =>{
  db.login(req.body).then((results) => {
    res.json(results)
  })
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.getAllUser().then((results) => {
    res.json(results)
  })
});

router.post('/add', (req,res,next) =>{
  db.addUser(req.body).then((results) => {
    res.json(results)
  })
})

router.put('/:id', (req,res,next) =>{
  db.updateUser(req.params.id,req.body).then((results) => {
    res.json(results)
  })
})

router.delete('/:id', (req,res,next) =>{
  db.deleteUser(req.params.id).then((results) => {
    res.json(results)
  })
})

module.exports = router;
