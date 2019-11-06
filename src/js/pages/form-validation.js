(function($) { 
    "use strict";

    $(document).ready(function() {
		$('.needs-validation').each(function() {
			$(this).on('submit', function(event) {
				if ($(this)[0].checkValidity() === false) {
					event.preventDefault()
					event.stopPropagation()
				}
				
				$(this).addClass('was-validated')
			})
		})
	})
})(jQuery);