const connection =require('./db')
 
module.exports ={
  //methods for sellecting users
  createCnx(){
    return new Promise((resolve,reject) => {
      connection.connect((err)=> {
        if(err) {
          reject(err)
        }
        console.log('connected as id ' + connection.threadId);
        resolve()
      });
    })
  }
,
  getAllUser(){
    return new Promise((resolve,reject)=>{
      connection.query('SELECT * FROM user', function (error, results, fields) {
        if (error){
          reject(error);
        }
        resolve(results);
      });
    })
  }
,
  getUserById(id){
  return new Promise((resolve,reject)=>{
    connection.query('SELECT * FROM user WHERE id = ?',[id], function (error, results, fields) {
        if (error){
          reject(error);
        }
        console.log(results[0].user);
        resolve(results);
      });
    })
  }
, 
  getUserByLogin(login){
    return new Promise((resolve,reject)=>{
      connection.query('SELECT * FROM user WHERE login = ?',[login], function (error, results, fields) {
        if (error){
          reject(error);
        }
        console.log(results[0].user);
        resolve(results);
      });
    })
  }
,
getUserByEmail(login){
  return new Promise((resolve,reject)=>{
    connection.query('SELECT * FROM user WHERE email = ?',[login], function (error, results, fields) {
      if (error){
        reject(error);
      }
      console.log(results[0].user);
      resolve(results);
    });
  })
}
,
//method to check if the user can login
  login(login){
    return new Promise((resolve,reject)=>{
      connection.query('SELECT * FROM user WHERE login = ? and password = ?',[login.login,login.password], function (error, results, fields) {
        if (error){
          reject(error);
        }
        console.log(results.length);
        resolve(results.length == 1);
      });
    })
  }
,
//insert a user
  addUser(user){
    return new Promise((resolve,resjct) => {
      connection.query('INSERT INTO user SET ?', user, function (error, results, fields) {
        if (error) 
          reject(error);
        console.log(results.insertId);
        resolve(results)
      });
    })
  }
,
//delete user
  deleteUser(id){
    return new Promise((resolve,reject) => {
      connection.query('DELETE FROM user WHERE id = ?',[id], function (error, results, fields) {
        if (error) reject(error);
        resolve(results)
      })
    })
  }
,
//update a user
  updateUser(id,user){
    return new Promise((resolve,resjct) => {
      connection.query('UPDATE user SET ? WHERE id = ?', [user,id], function (error, results, fields) {
        if (error) 
          reject(error);
        console.log(results.insertId);
        resolve(results)
      });
    })
  }

}

