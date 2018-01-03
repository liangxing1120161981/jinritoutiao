/**
 * Created by Administrator on 2017/12/27.
 */
//正则验证
var ophone=document.getElementById('phone');
var opass=document.getElementById('pass');
var ocheckphone=document.getElementById('checkphone');
var ocheckpass=document.getElementById('checkpass');

var opassagain=document.getElementById('passagain');
var ocheckagain=document.getElementById('checkagain');
var ocheckemail=document.getElementById('checkemail');
var oemail=document.getElementById('email');
ophone.onfocus=function(){
    this.value='';
};
ophone.onblur=function() {
    clearTimeout(iTimer);
    var reg1 = /^1\d{10}$/;
    console.log(ophone.value);
    if (reg1.test(ophone.value) == false) {
        ocheckphone.style.display = 'block';
        var iTimer=setTimeout(function(){
            ocheckphone.style.display = 'none';
        },3000);
    }
}
opass.onblur= function () {
    var reg2=/\w{8,12}/;
    if(reg2.test(opass.value)==false){
        ocheckpass.style.display='block';
        var Timer=setTimeout(function(){
            ocheckpass.style.display='none';
        },3000)
    }
}
opassagain.onfocus=function(){
    this.value='';
}
opassagain.onblur=function(){
    console.log(opass.value);
    console.log(opassagain.value);

    if(opassagain.value!==opass.value){
        ocheckagain.style.display='block';
        var iTimer=setTimeout(function(){
            ocheckphone.style.display = 'none';
        },3000);
    }
}


oemail.onfocus=function(){
    this.value='';
}
oemail.onblur=function(){
    var reg3=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(reg3.test(oemail.value)==false){
        ocheckemail.style.display='block';
        var iTimer=setTimeout(function(){
            ocheckemail.style.display = 'none';
        },3000);
    }
}