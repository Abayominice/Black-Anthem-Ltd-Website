var mysql = require('mysql')
var conn = mysql.createConnection({
  host: 'blackanthemltd.site', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: 'Mynameisabayomi1.',      // Replace with your database password
  database: 'bal' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;