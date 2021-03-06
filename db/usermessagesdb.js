/**
 * Created by Administrator on 2017/12/27.
 */
//专门针对usermessages的操作
/**
 * Created by Administrator on 2017/12/26.
 */
const mongoose = require("mongoose");
const dbconn = require("./dbconn")();

//专门针对userinfos集合的操作

//创建模板（跟数据库中集合的结构要一致）
let usermessageSchema = new mongoose.Schema({
    username:String,
    userpass:String
});

//创建模型（把模板和数据库中集合对应链接起来）
let usermessageModel = dbconn.model("usermessages",usermessageSchema);

module.exports = {
    //完成添加数据的功能
    "add":function(data,callback){
        //创建实体（要插入到数据库中数据）
        let usermessageEntity = new usermessageModel(data);

        usermessageEntity.save((err,data)=>{
            if(err){
            console.log(err);
            callback(false);
        }else{
            callback(true);
        }
    });
},

"find":function(condition,callback){

    usermessageModel.find(condition,(err,data)=>{
        if(err){
        console.log(err);
        callback([]);
    }else{
        callback(data);
    }
});
},

"reg":function(data,callback){
    let obj = this;
    //1、查找该用户是否存在
    this.find({"username":data.username},function(userinfos){
        if(userinfos.length==0){
            //2、如果不存在则保存
            obj.add(data,function(isSuccess){
                callback(isSuccess);
            });

        }else{
            callback(false);
        }
    });
}
}