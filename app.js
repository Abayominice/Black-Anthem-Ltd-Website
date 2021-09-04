const express = require('express')
const path = require('path')

console.log("@about")

const app = express()
const port = 3000



//Static Files
app.use(express.static(path.resolve(__dirname, 'public')))


var usersRouter = require('./public/js/users');
app.use('/api/', usersRouter);


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


