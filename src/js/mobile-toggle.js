(function($) { 
    "use strict";
    
	$(document).ready(function() {
		$('body').on('click', function(event) {
			if ($('.top-nav-box').length) {
				if ($('.top-nav-box').hasClass('active') && !$(event.target).closest('.top-nav-box').length) {
					$('.top-nav-box').removeClass('active')
					$('.top-bar-box').removeClass('top-nav-mask')
				} else if ($(event.target).hasClass('mobile-nav-toggle')) {
					$('.top-nav-box').addClass('active')
					$('.top-bar-box').addClass('top-nav-mask')
				}
			} else if ($('.side-nav-box').length) {
				if ($('.side-nav-box').hasClass('active') && !$(event.target).closest('.side-nav-box').length) {
					$('.side-nav-box').removeClass('active')
					$('body').removeClass('side-nav-mask')
				} else if ($(event.target).hasClass('mobile-nav-toggle')) {
					$('.side-nav-box').addClass('active')
					$('body').addClass('side-nav-mask')
				}
			} else if ($('.mail-menu-layout').length) {
				if ($('.mail-menu-layout').hasClass('active') && !$(event.target).closest('.mail-menu-layout').length) {
					$('.mail-menu-layout').removeClass('active')
					$('.top-bar-box').removeClass('top-nav-mask')
				} else if ($(event.target).hasClass('mobile-nav-toggle')) {
					$('.mail-menu-layout').addClass('active')
					$('.top-bar-box').addClass('top-nav-mask')
				}
			} else if ($('.file-manager-menu-layout').length) {
				if ($('.file-manager-menu-layout').hasClass('active') && !$(event.target).closest('.file-manager-menu-layout').length) {
					$('.file-manager-menu-layout').removeClass('active')
					$('.top-bar-box').removeClass('top-nav-mask')
				} else if ($(event.target).hasClass('mobile-nav-toggle')) {
					$('.file-manager-menu-layout').addClass('active')
					$('.top-bar-box').addClass('top-nav-mask')
				}
			}
		})
	})
})(jQuery);