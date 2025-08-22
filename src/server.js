const express = require('express')
require('dotenv').config()
const port = process.env.PORT;
const app = express();
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web');
const configViewEngine = require('./config/viewengine');
const mysql = require('mysql2');

//config template engine
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);

//test connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 123456,
  database: 'hoidanit'
});

connection.query(
  'select * from Users u ;',
  function (err, results, fields) {
    console.log(results);
    console.log(fields);
  }
);


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
