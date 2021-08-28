const express = require('express')
const path = require('path')
// const cors = require('cors')
const app = express()
const port = 3000

// var corsOptions = {
// 	origin: 'https://www.blackanthemltd.site',
// 	optionsSuccessStatus: 200
// }
// app.get('/products/:id', cors(corsOptions), function (req, res, next) {
// 	res.json({msg: 'This is CORS-enabled for only example.com.'})
// })
// // app.listen(3000, function () {
// // console.log('CORS-enabled web server listening on port 80')
// // })
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
