(function($) { 
    "use strict";

	$(document).ready(function() {

		// Chat side layout
		$('body').on('click', function(event) {
			if ($('.chat-menu-layout').hasClass('active') && !$(event.target).closest('.chat-menu-layout').length) {
				$('.chat-menu-layout').removeClass('active')
				$('body').removeClass('side-layout-mask')
			} else if ($(event.target).hasClass('side-layout-toggle') || $(event.target).parent().hasClass('side-layout-toggle')) {
				$('.chat-menu-layout').addClass('active')
				$('body').addClass('side-layout-mask')
			}
		})

		// Chat side layout slimscroll
		var chatSideContentSlimscroll = () => {
			setTimeout(() => {
				$('.slimscroll-chat-wrapper').slimScroll({
					destroy: true
				})
				$('.slimscroll-chat-wrapper').contents().unwrap()
				$('.chat-list').wrapInner("<div class='slimscroll-chat-wrapper'></div>")
				$('.slimscroll-chat-wrapper').slimScroll({
					size: '5px',
					distance: '2px',
					color: '#565c6d',
					height: $('.chat-list').height()
				})
			}, 1000)
		}

		chatSideContentSlimscroll()

		$(window).resize(function() {
			chatSideContentSlimscroll()
		})
	})
})(jQuery);