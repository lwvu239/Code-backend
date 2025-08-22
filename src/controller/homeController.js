const getHomePage = (req, res) => {
    res.send('Welcome homepage');
} 

const getTest = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomePage, getTest
}