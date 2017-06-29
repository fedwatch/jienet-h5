var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '爽街街[App] - 1级优质商品|7天无理由退换|48小时快速退款' });
});

module.exports = router;
