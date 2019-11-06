(function($) { 
    "use strict";

    $(document).ready(function() {
		$('.loading-ripple').on('click', function() {
			let self = this
			$(self).addClass('active')
			setTimeout(() => {
				$(self).removeClass('active')
			}, 3000)
		})
	})
})(jQuery);