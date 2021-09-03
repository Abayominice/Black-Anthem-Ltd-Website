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

app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
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
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();
