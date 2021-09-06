require('dotenv').config({});
const express = require('express')
const path = require('path')
const app = express()
var mysql = require('mysql');
var bodyParser = require('body-parser')
const port = 3000

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Static Files
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({
  extended:true,
}))

var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME,
});
 
connection.connect(function(err){
  if (err) throw err;
  console.log('connected..')
});


//Set views
app.set('view engine', 'ejs')

app.set('views', './views')


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
  res.render('home');
})

app.post('/', function(req, res) {
  var sql =`insert into bal values('${req.body.fname}', '${req.body.lname}', '${req.body.email}')`;
  connection.query(sql, function (error, results) {
    if (error) throw error;
    app.get('/503page', (req, res) => {
      res.render('503page');
    })
  });

  res.render('Home', { title: 'Data Saved',
  message: 'Data Saved successfully.'})

  connection.end();
})

app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
})
