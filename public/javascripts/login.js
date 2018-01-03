/**
 * Created by Administrator on 2017/12/27.
 */
var ophone=document.getElementById('phone');
var opass=document.getElementById('pass');
ophone.onfocus=function(){
    this.value='';
};
ophone.onblur=function(){
    this.value='手机号';
}
opass.onfocus=function(){
    this.value='';
};
opasss.onblur=function(){
    this.value='请输入密码';
}