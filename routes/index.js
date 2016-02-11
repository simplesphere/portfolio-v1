var express = require('express');
var router = express.Router();

/* GET home Page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About Page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Who am I ?' });
});

/* GET Skills Page. */
router.get('/skills', function(req, res, next) {
  res.render('skills', { title: 'My Skills' });
});

/* GET Portfolio Page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});

/* GET Contact Page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Get in Touch' });
});

module.exports = router;
