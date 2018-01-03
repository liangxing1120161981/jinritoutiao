var express = require('express');
var router = express.Router();
var newslistsdb = require("../db/newslistsdb");

/* POST users listing. */
router.post('/', function(req, res, next) {
    //1、接收前端传来的数据
    let newsid = req.body.newsid;
    let newsurl = req.body.newsurl;
    let newstitle = req.body.newstitle;
    let newssource = req.body.newssource;
    let newsvisit = req.body.newsvisit;
    let newstime = req.body.newstime;



    //2、链接数据库（判断，保存）
    newslistsdb.add({
        'newsid':newsid,
        'newsurl':newsurl,
        'newstitle':newstitle,
        'newssource':newssource,
        'newsvisit':newsvisit,
        'newstime':newstime,
    },function(issuccess){
        if(issuccess){
            res.send("<script>alert('添加成功')</script>");
            console.log("数据添加成功");
        }
    });
});

module.exports = router;


