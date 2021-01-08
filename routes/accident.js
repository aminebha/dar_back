var express = require('express');
var router = express.Router();
const analayse = require('../services/analyseService')
const db_accident= require('../DB_access/DB_accident');
const mailer = require('./../services/mail')
//const { analyseData } = require('../services/analyseService');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db_accident.getAllAccident().then((results) => {
    res.json(results)
  })
});

router.get('/:id', function(req, res, next) {
    db_accident.getAccidentById().then((results) => {
    res.json(results)
  })
});

router.get('/user/:id', function(req, res, next) {
    db_accident.getAccidentByUser().then((results) => {
    res.json(results)
  })
});


router.post('/add', (req,res,next) =>{
    db_accident.addAcompletAccident(req.body).then((results) => {
      if(req.body.accident.need_help === true){
        mailer.main(req.body.localisation);
      }
      res.json(results)
  })
})

router.put('/:id', (req,res,next) =>{
    db_accident.updateAccident(req.params.id,req.body).then((results) => {
    res.json(results)
  })
})

router.delete('/:id', (req,res,next) =>{
    db_accident.deleteAccident(req.params.id).then((results) => {
    res.json(results)
  })
})

module.exports = router;
