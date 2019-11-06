(function($) { 
    "use strict";
    
	$(document).ready(function() {

		var scrollBarColor = ''

		// Set scrollbar color
		if ($('.side-nav-box').hasClass('light')) {
			scrollBarColor = '#565c6d'
		} else {
			scrollBarColor = 'rgb(255, 255, 255)'
		}

		function topNavSlimscroll() {
			if ($(document).width() <= 960) {

				var activeSubMenu = false, el, scrollPosition = { scrollBox: 0, scrollBar: 0 }

				$('.top-nav-box').find('.top-nav').children('li').each(function() {
					if ($(this).hasClass('active')) {
						el = this
						activeSubMenu = true
					}

					$(this).children('a').off()
					$(this).children('a').on('click', function() {

						// Remove submenu scroll
						$('.top-nav-box').find('.top-nav').children('li').each(function() {
							$(this).children('.sub-menu').children('div').children('ul').removeAttr('style')
							$(this).children('.sub-menu').children('div').children('ul').slimScroll({
								destroy: true
							})
						})

						var menu = $(this).parent('li')
						if (menu.hasClass('active')) {
							menu.children('.sub-menu').animate({
								left: '-500px'
							}, 320).queue(function() {

								// Return scrollbar top position to zero
								$('.top-nav').children().first().css('margin-top', '0px')

								$('.top-nav').slimScroll({
									size: '5px',
									distance: '2px',
									color: scrollBarColor,
									height: window.innerHeight
								}).scrollTop(scrollPosition.scrollBox)
								$('.top-nav').parent().find('.slimScrollBar').css('top', scrollPosition.scrollBar)

								// Make topnav hovered due to slimscroll bug (Scrollbar not moving until top nav hovered)
								$('.top-nav').mouseover()

								menu.removeClass('active')
									.children('.sub-menu')
									.removeAttr('style').dequeue()
							})
						} else {
							// Save current scroll position
							if ($('.top-nav').parent().hasClass('slimScrollDiv')) {
								scrollPosition.scrollBox = $('.top-nav').scrollTop()
								scrollPosition.scrollBar = $('.top-nav').parent().find('.slimScrollBar').css('top')
							}

							// Prepare submenu scrollbar
							$('.top-nav-box').find('.top-nav').children('li').removeClass('active')
							menu.addClass('first-position')
							menu.children('.sub-menu').children('ul').slimScroll({
								size: '5px',
								distance: '2px',
								color: scrollBarColor,
								height: window.innerHeight
							})
							menu.children('.sub-menu').animate({
								left: '54px'
							}, 320).queue(function() {
								menu.removeClass('first-position')
									.addClass('active')
									.children('.sub-menu')
									.removeAttr('style').dequeue()
							})

							// Set nav scrollbar top position
							$('.top-nav').children().first().css('margin-top', '-' + scrollPosition.scrollBox + 'px')

							// Destroy nav scrollbar
							$('.top-nav').removeAttr('style')
							$('.top-nav').slimScroll({
								destroy: true
							})
						}
					})

					$(this).children('.sub-menu').children('ul').children('li').each(function() {
						$(this).children('a').off()
						$(this).children('a').on('click', function() {
							if ($(this).parent('li').hasClass('active')) {
								$(this).parent('li').removeClass('active')
							} else {
								$('.top-nav-box').find('.top-nav').children('li').children('.sub-menu').children('div').children('ul').children('li').removeClass('active')
								$(this).parent('li').addClass('active')
							}
						})	
					})
				})

				
				if (!activeSubMenu) {
					$('.top-nav').slimScroll({
						size: '5px',
						distance: '2px',
						color: scrollBarColor,
						height: window.innerHeight
					})
				} else {
					$(el).children('.sub-menu').children('ul').slimScroll({
						size: '5px',
						distance: '2px',
						color: scrollBarColor,
						height: window.innerHeight
					})
				}
			} else {
				$('.top-nav').removeAttr('style')
				$('.top-nav').slimScroll({
					destroy: true
				})

				$('.top-nav-box').find('.top-nav').children('li').each(function() {
					$(this).children('a').off()
					$(this).children('.sub-menu').find('ul').removeAttr('style')
					$(this).children('.sub-menu').find('ul').slimScroll({
						destroy: true
					})
					$(this).children('.sub-menu').find('ul').children('li').each(function() {
						$(this).children('a').off()
					})
				})
			}
		}

		topNavSlimscroll()
		$(window).resize(function() {
			topNavSlimscroll()		
		})
	})
})(jQuery);