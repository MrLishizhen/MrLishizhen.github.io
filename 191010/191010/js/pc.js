$(function() {
	$("header .nav>li>a").click(function() {
		$("header .active").removeClass("active");
		$(this).addClass("active");
	});
	$("header .content #openBtn").click(function() {
		if ($("#navMini").hasClass("op")) {
			$("header #openBtn .lcitem").css({
				transform: "translateZ(0px) rotate(0deg)",
			});
			$("header #openBtn .lcitem.bottom .rect").css({
				transform: "translate3d(0px, 7px, 0px)",
			});
			$("header #openBtn .lcitem.top .rect").css({
				transform: "translate3d(0px, -7px, 0px)",
			});
			$("#navMini").css("height", "0%");
			$("#navMini").removeClass("op");
		} else {
			$("header #openBtn .lcitem.bottom").css({
				transform: "translateZ(0px) rotate(-45deg)",
			});
			$("header #openBtn .lcitem.top").css({
				transform: "translateZ(0px) rotate(45deg)",
			});
			$("header #openBtn .lcitem .rect").css({
				transition: "transform 0.2s ease 0s",
				transform: "translate3d(0px, 0px, 0px)",
			});
			$("#navMini").css("height", "100%");
			$("#navMini").addClass("op");
		};
	});



});
