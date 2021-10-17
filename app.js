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
  // const transporter = nodemailer.createTransport({
  //   host: 'mail.privateemail.com',
  //   port: 465,
  //   secure:true,
  //   auth: { 
  //     user:'info@blackanthemltd.site',
  //     pass:'mynameisabayomi.'
  //   }
  // })
const Vonage = require('@vonage/server-sdk')
const vonage = new Vonage({
    apiKey: "53986a1b",
    apiSecret: "O05G9hCBovKp2ZdP"
  })

const from = "Black Anthem LTD"
const to = `${req.body.email}`
const text = `${req.body.fname} ${req.body.lname} Thank you for Subscribing to our Newsletter`
 
vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
  // const mailOptions = {
  //   from: 'info@blackanthemltd.site',
  //   to: req.body.email,
  //   subject: 'Subscriber',
  //   text: `${req.body.fname}${req.body.lname} Thank you for subscribing to our newsletter!`
  // }

  // transporter.sendMail(mailOptions, (error, info)=>{
  //   if(error){
  //     console.log(error);

  //   }else{
  //     console.log('Email sent')
  //   }
  // })
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
  // const transporter = nodemailer.createTransport({
  //   host: 'mail.privateemail.com',
  //   port: 465,
  //   // secure:true,
  //   auth: { 
  //     user:'info@blackanthemltd.site',
  //     pass:'mynameisabayomi.'
  //   }
  // })
const Vonage = require('@vonage/server-sdk')
const vonage = new Vonage({
    apiKey: "53986a1b",
    apiSecret: "O05G9hCBovKp2ZdP"
  })
const sfrom = `${req.body.semail}`
const sto = "+2348121318795"
const stext = `Black Anthem LTD! ${req.body.sfname} ${req.body.slname} with mobile number: ${req.body.semail}, requests for qoutation on the service: ${req.body.services} and says: ${req.body.comment}`

vonage.message.sendSms(sfrom, sto, stext, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
const Vonage1 = require('@vonage/server-sdk')
const vonage1 = new Vonage1({
    apiKey: "53986a1b",
    apiSecret: "O05G9hCBovKp2ZdP"
  })

const ssfrom = "Black Anthem LTD"
const ssto = `${req.body.semail}`
const sstext = `Your request has been recieved, we will get back to you shortly!`
 
vonage1.message.sendSms(ssfrom, ssto, sstext, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
  // const mailOptions = {
  //   from: 'info@blackanthemltd.site',
  //   to: 'info@blackanthemltd.site',
  //   subject: `Message from ${req.body.semail}: for ${req.body.services}`,
  //   text: req.body.comment
  // }

  // transporter.sendMail(mailOptions, (error, info)=>{
  //   if(error){
  //     console.log(error);

  //   }else{
  //     console.log('Email sent')
  //   }
  // })
  connection.query(sql, function (error, results) {
    if (error) throw error;
    app.get('/503page', (req, res) => {
      res.render('503page');
    })
  });
 
  res.redirect(`/RAQ`);
})
app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
})
