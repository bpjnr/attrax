(function($) { 
    "use strict";

    $(document).ready(function() {

		// Chat main layout slimscroll
		var chatMainContentSlimscroll = () => {
			setTimeout(() => {
				$('.slimscroll-chat-main-wrapper').slimScroll({
					destroy: true
				})
				$('.slimscroll-chat-main-wrapper').contents().unwrap()
				$('.chat-box').wrapInner("<div class='slimscroll-chat-main-wrapper'></div>")
				$('.slimscroll-chat-main-wrapper').slimScroll({
					size: '5px',
					distance: '2px',
					color: '#565c6d',
					height: $('.chat-box').height()
				})
			}, 1000)
		}

		chatMainContentSlimscroll()

		$(window).resize(function() {
			chatMainContentSlimscroll()
		})
	})
})(jQuery);