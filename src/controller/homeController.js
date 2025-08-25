const connection = require('../config/database');


const getHomePage = (req, res) => {
    let users = [];
    connection.query(
      'select * from Users u ;',
      function (err, results, fields) {
        users = results;
        console.log(results);
        res.send(JSON.stringify(users));
      }
    );
} 

const getTest = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomePage, getTest
}