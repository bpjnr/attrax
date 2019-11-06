(function($) { 
    "use strict";
    
	$(document).ready(function() {
		var userProfile = $('.user-profile')
		$(userProfile).on('click', function() {
			if ($(userProfile).find('.user-profile-content').is(":visible")) {
				$(userProfile).find('.user-profile-content').hide()
			} else {
				$('.notification-item').find('.notification-content').hide()
				$(userProfile).find('.user-profile-content').show()
			}
		})
	})
})(jQuery);