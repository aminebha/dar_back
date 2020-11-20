const connection =require('./db')
 
module.exports ={
   // methods to get vehicles
   getAllInfo_driver(){
    return new Promise((resolve,reject)=>{
      connection.query('SELECT * FROM info_driver', function (error, results, fields) {
        if (error){
          reject(error);
        }
        resolve(results);
      });
    })
}
,
getInfo_driverById(id){
    return new Promise((resolve,reject)=>{
    connection.query('SELECT * FROM info_driver WHERE id = ?', id , function (error, results, fields) {
        if (error){
        reject(error);
        }
        resolve(results);
    });
    })
}
,
//insert a user
addInfo_driver(info_driver){
return new Promise((resolve,resjct) => {
  connection.query('INSERT INTO info_driver SET ?', info_driver, function (error, results, fields) {
    if (error) 
      reject(error);
    console.log(results.insertId);
    resolve(results)
  });
})
}
,
//delete user
deleteInfo_driver(id){
return new Promise((resolve,reject) => {
  connection.query('DELETE FROM info_driver WHERE id = ?',[id], function (error, results, fields) {
    if (error) reject(error);
    resolve(results)
  })
})
}
,
//update a user
updateInfo_driver(id,info_driver){
return new Promise((resolve,resjct) => {
  connection.query('UPDATE info_driver SET ? WHERE id = ?', [info_driver,id], function (error, results, fields) {
    if (error) 
      reject(error);
    console.log(results.insertId);
    resolve(results)
  });
})
} 
}