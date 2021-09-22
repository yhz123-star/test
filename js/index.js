/*
//animate动画效果
$(function myTest(){
    $('bbbtest').addClass('fadeIn');
    setTimeout(function(){
        $('bbbtest').removeClass('fadeIn');
    }, 1000);
});
*/
/*jquery动画效果*/
/*
$("#bannerbotton").click(function(){
  $(".bannertoptext").fadeIn();
  $(".bannertoptext").fadeIn("slow");
  $(".bannertoptext").fadeIn(3000);
});

*/
         
 /*      
			$(".bannertoptext").removeClass("animated fadeInDown");
			$(".bannerbottomtext").removeClass("animated fadeInDown");
			setTimeout(function(){
				$(".bannertoptext").addClass("animated fadeInDown");
				$(".bannerbottomtext").addClass("animated fadeInDown");
			},0)
		  
		 
			$(".bannertoptext").removeClass("animated fadeInDown");
			$(".bannerbottomtext").removeClass("animated fadeInDown");
			setTimeout(function(){
				$(".bannertoptext").addClass("animated fadeInDown");
				$(".bannerbottomtext").addClass("animated fadeInDown");
			},0)
*/
/*
mySwiper.addEventListener('renderCustom', (e)=>{
  console.log(e.target)
})
*/	
window.onload = function(){
 //初始化分分页器    
 var mySwiper = new Swiper('.swiper-container',{
	 effect : 'fade',
	 fadeEffect: 
	 { 
	 crossFade: true, 
	 } ,
	 loop: true,
	 autoplay: true,//自动轮播
	 speed: 600,	 
     pagination: {
     el: '.swiper-pagination',
	 clickable :true,
	 paginationClickable: true,
	 type : 'custom',//这里分页器类型必须设置为custom,即采用用户自定义配置
	 
	 			//下面方法可以生成我们自定义的分页器到页面上
	 			renderCustom: function(swiper, current, total) {
	 				var customPaginationHtml = "";
					
	 				for(var i = 0; i < total; i++) {
	 					//判断哪个分页器此刻应该被激活
	 					if(i == (current - 1)) {
	 						customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
	 					} else {
	 						customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
	 					}
	 				}
	 				return customPaginationHtml;
				
	 			},
					
   },
 })	
}



$(document).ready(function(){
  $("#bannerbotton").click(function(){
    $(".layui-tab-content").slideDown();
	$(".bottomtext").slideDown();
	$(".text-box").slideDown();
  });
});

/* 
*/
$(document).ready(function(){
	$('.panel').addClass('fadeIn');
	setTimeout(function(){
	    $('.panel').removeClass('fadeIn');
	}, 1000);
	
  $(".flip").click(function(){
    $('.panel').slideToggle();
  });
});