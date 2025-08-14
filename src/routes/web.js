const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.send('xin chao')
})

router.get('/image', (req, res) => {
  res.render('sample.ejs')
})

module.exports = router;