var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
		title_name: 'Openshift Template',
		title_page: 'Home',
		title_logo_Image: '/images/logo/api.png',
		author: 'Alan J. Fitzpatrick',
		author_link: 'http://www.theartofhacks.com'
	});
});

module.exports = router;