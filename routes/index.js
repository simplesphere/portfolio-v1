var express = require('express');
var router = express.Router();

/* GET home Page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About Page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET Skills Page. */
router.get('/skills', function(req, res, next) {
  res.render('skills', { title: 'Service' });
});

/* GET Portfolio Page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Project' });
});

/* GET Contact Page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
