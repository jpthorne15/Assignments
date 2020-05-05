const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cartoons', { cartoons: 'Bugs Bunny' });
});

module.exports = router;