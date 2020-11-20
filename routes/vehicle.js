var express = require('express');
var router = express.Router();
const db_vehicle= require('../DB_access/DB_vehicle');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db_vehicle.getAllVehicle().then((results) => {
    res.json(results)
  })
});

router.get('/:id', function(req, res, next) {
    db_vehicle.getVehicleById().then((results) => {
    res.json(results)
  })
});

router.get('/user/:id', function(req, res, next) {
    db_vehicle.getVehicleByUser().then((results) => {
    res.json(results)
  })
});


router.post('/add', (req,res,next) =>{
    db_vehicle.addVehicle(req.body).then((results) => {
    res.json(results)
  })
})

router.put('/:id', (req,res,next) =>{
    db_vehicle.updateVehicle(req.params.id,req.body).then((results) => {
    res.json(results)
  })
})

router.delete('/:id', (req,res,next) =>{
    db_vehicle.deleteVehicle(req.params.id).then((results) => {
    res.json(results)
  })
})

module.exports = router;
