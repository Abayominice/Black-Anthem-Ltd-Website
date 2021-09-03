const express = require('express')
const path = require('path')
const app = express()
var mysql = require('mysql');

const port = 3000


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

app.get('/', (req, res) => {
  res.render('Home', {qs: req.query});
})



app.get('/RAQ', (req, res) => {
  res.render('RAQ', {qs: req.query});
})

var connection = mysql.createConnection({
  host     : 'https://www.blackanthemltd.site',
  user     : 'abayomi',
  password : '',
  database : 'subscribers'
});
 
connection.connect(function(err){
  if (err) throw err;
  console.log('connected..')
});

app.post('/', function(req,res){
  console.log(req.body);

  var sql ="insert into users values('"+req.body.fname+"','"+req.body.lname+"',"+req.body.email+")"
  connection.query(sql, function (error, results) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

  res.render('Home', { title: 'Data Saved',
  message: 'Data Saved successfully.'})

  connection.end();
})

var connection2 = mysql.createConnection({
  host     : 'https://www.blackanthemltd.site',
  user     : 'abayomi',
  password : '',
  database : 'Quotation_requests'
});
 
connection2.connect(function(err){
  if (err) throw err;
  console.log('connected..')
});

app.post('/RAQ', function(req,res){
  console.log(req.body);

  var sql ="insert into users values('"+req.body.sfname+"', '"+req.body.slname+"', '"+req.body.semail+"', '"+req.body.services+"', "+req.body.comment+")"
  connection2.query(sql, function (error, results) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

  res.render('RAQ', { title: 'Data Saved',
  message: 'Data Saved successfully.'})

  connection2.end();
})

app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
})


