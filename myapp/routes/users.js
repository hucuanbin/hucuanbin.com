var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/qwqw', function (req, res) {
    res.send('about');
});
router.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.params.id);
    next();
});
router.get('/user/:id', function (req, res, next) {
    res.send('USER');
});
router.get('/ab*cd', function (req, res) {
    res.send('ab*cd');
});
module.exports = router;
