const connection =require('./db')
 
module.exports ={
    // methods to get vehicles
    getAllVehicle(){
        return new Promise((resolve,reject)=>{
          connection.query('SELECT * FROM vehicle', function (error, results, fields) {
            if (error){
              reject(error);
            }
            resolve(results);
          });
        })
    }
    ,
    getVehicleByUser(id){
        return new Promise((resolve,reject)=>{
        connection.query('SELECT * FROM vehicle WHERE user_id = ?', id , function (error, results, fields) {
            if (error){
            reject(error);
            }
            resolve(results);
        });
        })
    }
    ,
    getVehicleById(id){
        return new Promise((resolve,reject)=>{
        connection.query('SELECT * FROM vehicle WHERE id = ?', id , function (error, results, fields) {
            if (error){
            reject(error);
            }
            resolve(results);
        });
        })
    }
    ,
    //insert a user
  addVehicle(vehicle){
    return new Promise((resolve,resjct) => {
      connection.query('INSERT INTO vehicle SET ?', vehicle, function (error, results, fields) {
        if (error) 
          reject(error);
        console.log(results.insertId);
        resolve(results)
      });
    })
  }
,
//delete user
  deleteVehicle(id){
    return new Promise((resolve,reject) => {
      connection.query('DELETE FROM vehicle WHERE id = ?',[id], function (error, results, fields) {
        if (error) reject(error);
        resolve(results)
      })
    })
  }
,
//update a user
  updateVehicle(id,vehicle){
    return new Promise((resolve,resjct) => {
      connection.query('UPDATE vehicle SET ? WHERE id = ?', [vehicle,id], function (error, results, fields) {
        if (error) 
          reject(error);
        console.log(results.insertId);
        resolve(results)
      });
    })
  }
}