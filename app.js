require('dotenv').config({});
const express = require('express')
const path = require('path')
const nodemailer = require('nodemailer');
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

app.set('views', 'views')


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
  res.render('Home');
})

app.post('/', function(req, res) {
  var sql =`insert into bal values('${req.body.fname}', '${req.body.lname}', '${req.body.email}')`;
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure:true,
    auth: { 
      user:'info@blackanthemltd.site',
      pass:'mynameisabayomi.'
    }
  })
  const mailOptions = {
    from: 'info@blackanthemltd.site',
    to: req.body.email,
    subject: 'Subscriber',
    text: 'Thank you for subscribing!'
  }

  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      console.log(error);

    }else{
      console.log('Email sent')
    }
  })
  connection.query(sql, function (error, results) {
    if (error) throw error;
    app.get('/503page', (req, res) => {
      res.render('503page');
    })
  });

  res.redirect('/');
 
  
})
app.post('/RAQ', function(req, res) {
  var sql =`insert into raq values('${req.body.sfname}', '${req.body.slname}', '${req.body.semail}', '${req.body.services}', '${req.body.comment}')`;
  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    // secure:true,
    auth: { 
      user:'info@blackanthemltd.site',
      pass:'mynameisabayomi.'
    }
  })
  const mailOptions = {
    from: 'info@blackanthemltd.site',
    to: 'info@blackanthemltd.site',
    subject: `Message from ${req.body.semail}: for ${req.body.services}`,
    text: req.body.comment
  }

  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      console.log(error);

    }else{
      console.log('Email sent')
    }
  })
  connection.query(sql, function (error, results) {
    if (error) throw error;
    app.get('/503page', (req, res) => {
      res.render('503page');
    })
  });
 
  res.redirect('/RAQ');

 

  
})
app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
})
