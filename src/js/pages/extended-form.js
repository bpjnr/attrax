(function($) { 
    "use strict";

    $(document).ready(function() {
    	// Select2
		if ($('.js-states').length) {
			$('.js-states').select2()
		}

		// Daterangepicker
		if ($('input[name="date"]').length) {
			$('input[name="date"]').daterangepicker({
				singleDatePicker: true
			}, function(start, end, label) {
				console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'))
			})
		}

		if ($('input[name="daterange"]').length) {
			$('input[name="daterange"]').daterangepicker(function(start, end, label) {
				console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'))
			})
		}

		// Ckeditor
		if ($('#editor').length) {
			ClassicEditor.create(document.querySelector('#editor'))
			.catch(error => {
				console.error(error)
			})
		}
	})
})(jQuery);