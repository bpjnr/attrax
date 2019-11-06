(function($) { 
    "use strict";
    
	$(document).ready(function() {
		var colored = $('.top-bar-box').hasClass('colored')
		
		if (!colored) {
			if ($(window).scrollTop() > 0) {
				$('.top-bar-box').addClass('colored')
			}

			$(window).scroll(function() {
				if ($(window).scrollTop() > 0) {
					$('.top-bar-box').addClass('colored')
				} else {
					$('.top-bar-box').removeClass('colored')
				}
			})
		} else {
			if ($(window).scrollTop() > 56) {
				$('.top-bar-box').addClass('scrolled')
			}

			$(window).scroll(function() {
				if ($(window).scrollTop() > 56) {
					$('.top-bar-box').addClass('scrolled')
				} else {
					$('.top-bar-box').removeClass('scrolled')
				}
			})
		}
	})
})(jQuery);