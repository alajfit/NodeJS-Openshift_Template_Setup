var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Support | API Requester',
  	author: 'Alan J. Fitzpatrick'
  });
});

module.exports = router;