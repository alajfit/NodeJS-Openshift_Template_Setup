var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title_name: 'Support | API Requester',
  	title_logo_Image: '/public/images/logo/api.png',
  	author: 'Alan J. Fitzpatrick'
  });
});

module.exports = router;