const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = year;

jQuery(window).bind('scroll', function() {
	if (jQuery(window).scrollTop() > 100) {
		jQuery('.header').addClass('header-fixed');
	} else {
		jQuery('.header').removeClass('header-fixed');
	}
	});