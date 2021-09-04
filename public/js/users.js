var express = require('express');
var router = express.Route();
var db=require('../../database');

router.get('/form', function(req, res, next) { 
res.render('Home'); 
console.log(req);
}).post('/create', function(req, res, next) {
  console.log(req)
  // store all the user input data
  const userDetails=req.body;
 
  // insert user data into users table
  var sql = 'INSERT INTO users SET ?';
  db.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User dat is inserted successfully "); 
  });
 res.redirect('/Home');  // redirect to user form page after inserting the data
}); 
module.exports = router;