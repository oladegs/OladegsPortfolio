var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', function(req, res, next) {
  res.render('index', { title: 'Profile' });
});

router.get('/profile/julio', function(req, res, next) {
  res.render('index', { title: 'Profile: Julio' });
});

router.get('/profile/john', function(req, res, next) {
  res.render('index', { title: 'Profile: John' });
});
module.exports = router;
