(function($) { 
    "use strict";

	$(document).ready(function() {

		// File manager side nav slimscroll
		var fileManagerSideNavSlimscroll = () => {
			$('.slimscroll-file-manager-wrapper').slimScroll({
				destroy: true
			})
			$('.slimscroll-file-manager-wrapper').contents().unwrap()

			if (window.outerWidth <= 992) {
				$('.file-manager-menu-layout').wrapInner("<div class='slimscroll-file-manager-wrapper'></div>")
				$('.slimscroll-file-manager-wrapper').slimScroll({
					size: '5px',
					distance: '2px',
					color: '#565c6d',
					height: window.innerHeight
				})
			}
		}

		fileManagerSideNavSlimscroll()

		$(window).resize(function() {
			fileManagerSideNavSlimscroll()
		})
	})
})(jQuery);