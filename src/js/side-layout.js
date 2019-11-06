(function($) { 
    "use strict";
    
	$(document).ready(function() {

		// Side layout
		$('body').on('click', function(event) {
			if ($('.side-layout').hasClass('active') && !$(event.target).closest('.side-layout').length) {
				$('.side-layout').removeClass('active')
				$('body').removeClass('side-layout-mask')
			} else if ($(event.target).hasClass('side-layout-toggle') || $(event.target).parent().hasClass('side-layout-toggle')) {
				$('.side-layout').addClass('active')
				$('body').addClass('side-layout-mask')
			}
		})

		// Side layout slimscroll
		var sideContentSlimscroll = () => {
			setTimeout(() => {
				$('.slimscroll-wrapper').slimScroll({
					destroy: true
				})
				$('.slimscroll-wrapper').contents().unwrap()

				if (window.outerWidth <= 1200) {
					$('.side-layout').wrapInner("<div class='slimscroll-wrapper'></div>")
					$('.slimscroll-wrapper').slimScroll({
						size: '5px',
						distance: '2px',
						color: '#565c6d',
						height: window.innerHeight
					})
				}
			}, 100)
		}

		sideContentSlimscroll()

		$(window).resize(function() {
			sideContentSlimscroll()
		})
	})
})(jQuery);