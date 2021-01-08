const connection =require('./db')
 
module.exports ={
   // methods to get vehicles
   getAllAccident(){
    return new Promise((resolve,reject)=>{
      connection.query('SELECT * FROM accident a,localisation,info_driver,info_vehicle,vehicle v,user u where a.id_vehicle = v.id and v.id_user = u.id', function (error, results, fields) {
        if (error){
          reject(error);
        }
        resolve(results);
      });
    })
}
,
getAccidentById(id){
    return new Promise((resolve,reject)=>{
    connection.query('SELECT * FROM accident acc,localisation,info_driver,info_vehicle WHERE acc.id = ?', id , function (error, results, fields) {
        if (error){
        reject(error);
        }
        resolve(results);
    });
    })
}
,
getAccidentByUser(id){
    return new Promise((resolve,reject)=>{
    connection.query('SELECT * FROM accident,localisation,info_driver,info_vehicle,vehicle veh WHERE veh.id_user = ?', id , function (error, results, fields) {
        if (error){
        reject(error);
        }
        resolve(results);
    });
    })
}
,
//insert a user
addAccident(accident){
return new Promise((resolve,resjct) => {
  connection.query('INSERT INTO accident SET ?', accident, function (error, results, fields) {
    if (error) 
      reject(error);
    console.log(results.insertId);
    resolve(results)
  });
})
}
,
addAcompletAccident(object){
  console.log(object)
    return new Promise((resolve,resjct) => {
        const accident = object.accident;
      connection.query('INSERT INTO localisation SET ?', object.localisation, function (error, results, fields) {
        if (error) {
          console.log(error)
          reject(error);
        }
        
        console.log(results.insertId);
        accident.id_localisation = results.insertId;
        connection.query('INSERT INTO info_driver SET ?', object.info_driver, function (error1, results1, fields1) {
            if (error1) 
              {console.log(error1)
                reject(error1)}
            accident.id_info_driver = results1.insertId;
            connection.query('INSERT INTO info_vehicle SET ?', object.info_vehicle, function (error2, results2, fields2) {
                if (error2) 
                  {console.log(error2)
                    reject(error2)}
                accident.id_info_vehicle = results2.insertId;
                connection.query('INSERT INTO accident SET ?', accident, function (error3, results3, fields3) {
                    if (error3) 
                      {console.log(error3)
                        reject(error3)}
                    accident.id_info_driver = results3.insertId;
                    resolve(results3.insertId)
                });
            });
        });
        resolve(results)
      });
    })
}
,
//delete user
deleteAccident(id){
return new Promise((resolve,reject) => {
  connection.query('DELETE FROM accident WHERE id = ?',[id], function (error, results, fields) {
    if (error) reject(error);
    resolve(results)
  })
})
}
,
//update a user
updateAccident(id,info_driver){
return new Promise((resolve,resjct) => {
  connection.query('UPDATE accident SET ? WHERE id = ?', [info_driver,id], function (error, results, fields) {
    if (error) 
      reject(error);
    console.log(results.insertId);
    resolve(results)
  });
})
} 
}