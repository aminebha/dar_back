const connection =require('./db')
 
module.exports ={
   // methods to get vehicles
   getAllInfo_vehicle(){
    return new Promise((resolve,reject)=>{
      connection.query('SELECT * FROM info_vehicle', function (error, results, fields) {
        if (error){
          reject(error);
        }
        resolve(results);
      });
    })
}
,
getInfo_vehicleById(id){
    return new Promise((resolve,reject)=>{
    connection.query('SELECT * FROM info_vehicle WHERE id = ?', id , function (error, results, fields) {
        if (error){
        reject(error);
        }
        resolve(results);
    });
    })
}
,
//insert a user
addInfo_vehicle(info_vehicle){
return new Promise((resolve,resjct) => {
  connection.query('INSERT INTO info_vehicle SET ?', info_vehicle, function (error, results, fields) {
    if (error) 
      reject(error);
    console.log(results.insertId);
    resolve(results)
  });
})
}
,
//delete user
deleteInfo_vehicle(id){
return new Promise((resolve,reject) => {
  connection.query('DELETE FROM info_vehicle WHERE id = ?',[id], function (error, results, fields) {
    if (error) reject(error);
    resolve(results)
  })
})
}
,
//update a user
updateInfo_vehicle(id,info_vehicle){
return new Promise((resolve,resjct) => {
  connection.query('UPDATE info_vehicle SET ? WHERE id = ?', [info_vehicle,id], function (error, results, fields) {
    if (error) 
      reject(error);
    console.log(results.insertId);
    resolve(results)
  });
})
} 
}