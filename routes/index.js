var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/receipt', function (req, res, next) {
    console.log(req.body);
    res.statusCode = 200;
});

module.exports = router;
