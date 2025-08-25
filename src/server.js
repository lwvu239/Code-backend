require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewengine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


//config template engine
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);



app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
