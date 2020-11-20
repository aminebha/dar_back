const connection =require('./db')
 
module.exports ={
   // methods to get vehicles
   getAllLocalisation(){
    return new Promise((resolve,reject)=>{
      connection.query('SELECT * FROM localisation', function (error, results, fields) {
        if (error){
          reject(error);
        }
        resolve(results);
      });
    })
}
,
getLocalisationById(id){
    return new Promise((resolve,reject)=>{
    connection.query('SELECT * FROM localisation WHERE id = ?', id , function (error, results, fields) {
        if (error){
        reject(error);
        }
        resolve(results);
    });
    })
}
,
//insert a user
addLocalisation(localisation){
return new Promise((resolve,resjct) => {
  connection.query('INSERT INTO localisation SET ?', localisation, function (error, results, fields) {
    if (error) 
      reject(error);
    console.log(results.insertId);
    resolve(results)
  });
})
}
,
//delete user
deleteLocalisation(id){
return new Promise((resolve,reject) => {
  connection.query('DELETE FROM localisation WHERE id = ?',[id], function (error, results, fields) {
    if (error) reject(error);
    resolve(results)
  })
})
}
,
//update a user
updateLocalisation(id,localisation){
return new Promise((resolve,resjct) => {
  connection.query('UPDATE localisation SET ? WHERE id = ?', [localisation,id], function (error, results, fields) {
    if (error) 
      reject(error);
    console.log(results.insertId);
    resolve(results)
  });
})
} 
}