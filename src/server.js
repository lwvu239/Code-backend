const express = require('express')
require('dotenv').config()
const app = express();
const configViewEngine = require('./config/viewengine');
const webRoutes = require('./routes/web');
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;


//config template engine
configViewEngine(app);
//config static file
app.use('/', webRoutes);


//khai bao route

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
