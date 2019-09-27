/*下拉*/
$("#uu li").hover(
	function() {
		$(this).children(".nav-ul").stop().slideDown(800);
	},
	function() {
		$(this).children(".nav-ul").stop().slideUp(800);
	}
)

/*显示背景*/



$(window).scroll(function() {
	if ($(this).scrollTop() >= 800) {
		$(".nav").css("backgroundColor", "rgba(0,0,0,.5)");
		
		$(".fh").fadeIn(800);
		$(".nav .logo").fadeOut(800);
	} else {
		$(".nav").css("backgroundColor", "rgba(164, 163, 160,.2)");
		$(".nav .logo").fadeIn(800);
		$(".fh").fadeOut(800);
	}
})


/*轮播图*/
layui.use('carousel', function() {
							var carousel = layui.carousel;
							//建造实例
							carousel.render({
								elem: '#test1',
								width: '100%', //设置容器宽度	
								interval:'3000',
								height: '550px',
								arrow: 'always' //始终显示箭头
								//,anim: 'updown' //切换动画方式
			
							});
						});

var div = document.getElementById("ban");
var ch = div.children;

for(var i = 1;i <= ch.length;i++){
	ch[i-1].style.background = "url(img/banner0"+i+".jpg) no-repeat center center";
}


$(".img").hover(function() {
		$(this).find(".fszs-span").stop().animate({
			top: 0,
		}, 1000);
	},
	function() {
		$(this).find(".fszs-span").stop().animate({
			top: 100 + "%",
		}, 1000);
	})



$(".wmzsn-img .zhezhao").hover(function() {
	//从透明到不透明
	$(this).parents(".wmzsn-img").siblings().children(".zhezhao").stop().animate({
		opacity: 0.7
	}, 800);
}, function() { //从不透明到透明
	$(this).parents(".wmzsn-img").siblings().children(".zhezhao").stop().animate({
		opacity: 0
	}, 800);
})


/*时间*/
var date = new Date();
var year = date.getFullYear();
var yue = date.getMonth() + 1;
var ri = date.getDate();
$(".xwzxn-Dtae .pd").text(ri);
if (yue < 10) {
	$(".xwzxn-Dtae .ps").text(year + "/" + "0" + yue);
} else {
	$(".xwzxn-Dtae .ps").text(year + "." + yue);
}



$(".xwzx-nr-n").hover(function() {
		$(this).find(".xwzxn-Dtae").stop().animate({
			opacity: 0,
		}, 800);
		
},function() {
	$(this).find(".xwzxn-Dtae").stop().animate({
			opacity: 0.7,
	}, 500);
})

$(".fh").click(function(){
	$("body,html").scrollTop(0);
})