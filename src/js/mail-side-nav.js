(function($) { 
    "use strict";
    
	$(document).ready(function() {

		// Mail side nav slimscroll
		var mailSideNavSlimscroll = () => {
			$('.slimscroll-mail-wrapper').slimScroll({
				destroy: true
			})
			$('.slimscroll-mail-wrapper').contents().unwrap()

			if (window.outerWidth <= 992) {
				$('.mail-menu-layout').wrapInner("<div class='slimscroll-mail-wrapper'></div>")
				$('.slimscroll-mail-wrapper').slimScroll({
					size: '5px',
					distance: '2px',
					color: '#565c6d',
					height: window.innerHeight
				})
			}
		}

		mailSideNavSlimscroll()

		$(window).resize(function() {
			mailSideNavSlimscroll()
		})
	})
})(jQuery);