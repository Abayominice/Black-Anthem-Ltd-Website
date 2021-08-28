const express = require('express')
const path = require('path')
const app = express()
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

app.get('/Portfolio', (req, res) => {
  res.render('Portfolio')
})

app.get('/RAQ', (req, res) => {
  res.render('RAQ')
})

app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
})
