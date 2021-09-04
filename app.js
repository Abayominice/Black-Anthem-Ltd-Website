const express = require('express')
const path = require('path')

console.log("@about")

const app = express()
const port = 3000



//Static Files
app.use(express.static(path.resolve(__dirname, 'public')))


var usersRouter = require('./public/js/users');
app.use('/api', usersRouter);


app.get('/form', function(req, res, next) { 
  res.render('Home'); 
  console.log(req);
  })

  var db=require('../../database');

router.post('/create', function(req, res, next) {
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

//Set views
app.set('view engine', 'ejs')

app.set('views', './views')

app.get('/', (req, res) => {
  console.log("@home")
  res.render('Home')
})

app.get('/About', (req, res) => {
  console.log("@about")
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


