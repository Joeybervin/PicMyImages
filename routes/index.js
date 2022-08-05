var express = require('express');
var router = express.Router();

/* API KEYS */
const unsplashApiKey = "E1z8KRKXgbH6GBVDNF-InjgQqYmGpSPzHUmho78Wf8o";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
