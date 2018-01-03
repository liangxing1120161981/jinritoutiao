
var oA=Array.from($('.list li a'));
var oC=Array.from($('.sidebar li a'))
oA.forEach((v)=>{
	v.addEventListener('mouseenter',function(){
		v.className='active';
	})
	v.addEventListener('mouseleave',function(){
		v.className='';
	})
});
oC.forEach((v)=>{
	v.addEventListener('mouseenter',function(){
		v.className='active';
	})
	v.addEventListener('mouseleave',function(){
		v.className='';
	})
	setTimeout(function(){
		this.className='active';
	},2000);
});

//吸顶效果
var ofixed=document.getElementsByClassName('leftban')[0];

window.onload=function(){
	var mySwiper = new Swiper ('.swiper-container', {
		autoplay: 2000,
		loop: true,
		autoplayDisableOnInteraction :false,
		//effect : 'cube',
		effect : 'coverflow',
		paginationClickable: true,
		// 如果需要分页器
		pagination: '.swiper-pagination',

		// 如果需要前进后退按钮
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',


	})






	window.onscroll=function(){
		var sTop = document.documentElement.scrollTop || document.body.scrollTop;
		var oClient= document.documentElement.clientWidth || document.body.clientWidth;
		if(oClient>800){
			ofixed.style.top=33+'px';
			if(sTop>30){
				ofixed.style.top=0+'px';
			}else{
				ofixed.style.top=33+'px';
			}
		}
		else{
			ofixed.style.top=0+'px';
			if(sTop>40&&sTop<359){
				ofixed.style.display='none';
			}
			else{
				ofixed.style.display='block';
			}
		}
		//屏幕缩放以后


	}
}

	