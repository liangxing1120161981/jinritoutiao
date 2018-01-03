var express = require('express');
var router = express.Router();
var newslistsdb = require("../db/newslistsdb");

/* POST users listing. */
router.get('/', function(req, res, next) {
    newslistsdb.find({},function(newsinfors){
        res.render('newslist',{data:newsinfors});
    });
});

module.exports = router;



