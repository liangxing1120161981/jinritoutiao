var express = require('express');
var router = express.Router();
var usermessagedb = require("../db/usermessagesdb");

/* POST users listing. */
router.post('/', function(req, res, next) {
    //1、接收前端传来的数据
    let username = req.body.username;
    let userpass = req.body.userpass;
    //console.log(req.body.username);
    //console.log(req.body.userpass);

    //2、链接数据库（判断，保存）
    usermessagedb.find({'username':username},function(usermessages){
        if(usermessages.length==0){
            res.send("<script>('用户名或者密码不正确');location.href='login.html'</script>")
        }else{
            res.redirect('toutiao.html');
        }
    });
});

module.exports = router;

