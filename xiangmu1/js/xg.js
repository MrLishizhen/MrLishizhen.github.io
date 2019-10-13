$(function() {
	$(".row>div").hover(function() {
		var $span = $("<span></span>");
		$(this).find(".row-df-img a").css('overflow', "hidden");
		$span.css({
			position: 'absolute',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,

		})
		$(this).find(".row-df-img a span").remove();
		$(this).find(".row-df-img a").append($span);
		$(this).find(".row-df-img a span").animate({
			opacity: 0.7
		}, 600);
		$(this).find(".row-df-img a img").css('transform', 'scale(1.1)');


	}, function() {
		$(this).find(".row-df-img a span").animate({
			opacity: 0
		}, 600);
		$(this).find(".row-df-img a img").css('transform', 'scale(1)');

	})


	$('.yw-row').css('display', 'none');
	$(".yw-row.active").css('display', "flex");
	$(".yw-title a").mouseover(function() {

		$(".yw-title a").css("color", "#b5b857");
		var str = parseInt($(this).attr("index"));
		$(this).css('color', '#fff');

		$('.yw-row').css('display', 'none');
		$('.yw-row:eq(' + str + ')').css("display", "flex");;
	})

	$(".nav-right").click(function() {
		if ($(".top-nav-ul").hasClass('sy')) {
			$(".top-nav-ul").hide(1000);
			$(".top-nav-ul").removeClass('sy');
		} else {
			$(".top-nav-ul").show(1000);
			$(".top-nav-ul").addClass("sy");
		}

	})
	$(window).resize(function() {
		if ($(this).width() < 768) {
			$(".top-nav-ul").css('display', 'none');

		} else {
			$(".top-nav-ul").removeClass('sy');
			$(".top-nav-ul").css('display', 'block');
		}
	})




})
