var express = require('express');
var router = express.Router();
var newslistsdb = require("../db/newslistsdb");

/* POST users listing. */
router.get('/', function(req, res, next) {
  //接收newsid
  let newsid=req.query.newsid;
  console.log(newsid);
  //从数据库中查找newsid对应的新闻
  newslistsdb.find({"newsid":newsid},function(newsinfors){
    //渲染模板
    res.render('newsdetail',{newsinfo:newsinfors[0]});
  });
});
module.exports = router;



;
