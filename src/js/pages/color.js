(function($) { 
    "use strict";

    var rgbToHex = function (rgb) { 
		var hex = Number(rgb).toString(16);
		if (hex.length < 2) {
			hex = "0" + hex;
		}
		return hex;
	}

	$(document).ready(function() {
		if ($('.color-box').length) {
			setTimeout(() => {
				var color = $('.color-box').clone(), i = 1, loop = true

				$('.color-list').html('')
				while (loop) {
					var el = $(color).clone()
					$(el).find('.content').addClass('bg-color-' + i)
					$(el).find('.color-number').html(i)
					$('.color-list').append(el)

					// RGB to Hex
					var red = $(el).find('.content').css('background-color').split(',')
					var green = $(el).find('.content').css('background-color').split(',')
					var blue = $(el).find('.content').css('background-color').split(',')

					$(el).find('.color-code').html('#' + rgbToHex(red[0].split('(')[1]) + rgbToHex(green[1].split(' ')[1]) + rgbToHex(blue[2].split(')')[0].split(' ')[1]).toString(16))

					i++
					if ($(el).find('.content').css('background-color') == 'rgba(0, 0, 0, 0)') {
						loop = false
						$('.color-list').find('.color-box').last().remove()
					}
				}
			}, 100)
		}
	})
})(jQuery);