const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {	
  res.send('This is the new landing page')
})

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))

//Set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('Home')
})

app.get('', (req, res) => {
  res.render('About')
})

app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
})
