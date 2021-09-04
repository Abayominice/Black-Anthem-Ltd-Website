// const express = require('express')
// const path = require('path')

// console.log("@about")

// const app = express()
// const port = 3000



// //Static Files
// app.use(express.static(path.resolve(__dirname, 'public')))


// var usersRouter = require('./public/js/users');
// app.use('/api', usersRouter);


// app.get('/form', function(req, res, next) { 
//   res.render('Home'); 
//   console.log(req);
//   })

//   var db=require('../../database');

// router.post('/create', function(req, res, next) {
//   console.log(req)
//   // store all the user input data
//   const userDetails=req.body;
 
//   // insert user data into users table
//   var sql = 'INSERT INTO users SET ?';
//   db.query(sql, userDetails,function (err, data) { 
//       if (err) throw err;
//          console.log("User dat is inserted successfully "); 
//   });
//  res.redirect('/Home');  // redirect to user form page after inserting the data
// });

// //Set views
// app.set('view engine', 'ejs')

// app.set('views', './views')

// app.get('/', (req, res) => {
//   console.log("@home")
//   res.render('Home')
// })

// app.get('/About', (req, res) => {
//   console.log("@about")
//   res.render('About')
// })

// app.get('/Projects', (req, res) => {
//   res.render('Projects')
// })

// app.get('/RAQ', (req, res) => {
//   res.render('RAQ')
// })
// app.listen(port, () => {
// 	  console.log(`Example app listening at http://localhost:${port}`)
// })

const express = require('express')
const path = require('path')
const app = express()
var mysql = require('mysql');
var bodyParser = require('body-parser')
const port = 3000

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Static Files
app.use(express.static(path.resolve(__dirname, 'public')))


//Set views
app.set('view engine', 'ejs')

app.set('views', './views')

app.get('/', (req, res) => {
  res.render('Home')
})

app.get('/About', (req, res) => {
  res.render('About')
})

app.get('/Projects', (req, res) => {
  res.render('Projects')
})

app.get('/RAQ', (req, res) => {
  res.render('RAQ')
})

app.get('/form', (req, res) => {
  res.render('home', {qs: req.query});
})

app.post('/form', urlencodedParser, (req, res) => {
  res.render('home', {qs: req.query});
})

// app.get('/raq', (req, res) => {
//   res.render('raq', {qs: req.query});
// })
// app.post('/raq', urlencodedParser, (req, res) => {
//   res.render('raq', {qs: req.query});
// })
var connection = mysql.createConnection({
  host     : 'https://www.blackanthemltd.site',
  user     : 'root',
  password : 'Mynameisabayomi1.',
  database : 'bal'
});
 
connection.connect(function(err){
  if (err) throw err;
  console.log('connected..')
});

app.post('/form', function(req,res){
  console.log(req.body);

  var sql ="insert into users values('"+req.body.fn+"','"+req.body.ln+"',"+req.body.email+")"
  connection.query(sql, function (error, results) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

  res.render('Home', { title: 'Data Saved',
  message: 'Data Saved successfully.'})

  connection.end();
})

// var connection2 = mysql.createConnection({
//   host     : 'https://www.blackanthemltd.site',
//   user     : 'abayomi',
//   password : '',
//   database : 'Quotation_requests'
// });
 
// connection2.connect(function(err){
//   if (err) throw err;
//   console.log('connected..')
// });

// app.post('/RAQ', function(req,res){
//   console.log(req.body);

//   var sql ="insert into users values('"+req.body.sfname+"', '"+req.body.slname+"', '"+req.body.semail+"', '"+req.body.services+"', "+req.body.comment+")"
//   connection2.query(sql, function (error, results) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });

//   res.render('RAQ', { title: 'Data Saved',
//   message: 'Data Saved successfully.'})

//   connection2.end();
// })

app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
})
