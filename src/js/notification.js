(function($) { 
    "use strict";
    
	$(document).ready(function() {

		$('.notification-item').each(function() {

			// Notification
			var notificationItem = this
			$(this).find('.icon').on('click', function() {
				if ($(notificationItem).find('.notification-content').is(":visible")) {
					$(notificationItem).find('.notification-content').hide()
				} else {
					$('.notification-item').find('.notification-content').hide()
					$('.user-profile').find('.user-profile-content').hide()
					$(notificationItem).find('.notification-content').show()
				}
			})

			// Notification nav slimscroll
			$(this).find('.content').slimScroll({
				size: '5px',
				distance: '2px',
				color: '#565c6d',
				height: '302px'
			})

			// Messages notification nav slimscroll
			$(this).find('.messages-content').slimScroll({
				size: '5px',
				distance: '2px',
				color: '#565c6d',
				height: '324px'
			})
		})
	})
})(jQuery);