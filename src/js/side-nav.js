(function($) { 
    "use strict";
    
	$(document).ready(function() {

		var scrollPosition = { scrollBox: 0, scrollBar: 0 }
		var scrollBarColor = ''

		// Set scrollbar color
		if ($('.side-nav-box').hasClass('light')) {
			scrollBarColor = '#565c6d'
		} else {
			scrollBarColor = 'rgb(255, 255, 255)'
		}

		function slimscroll() {
			$('.side-nav').slimScroll({
				size: '5px',
				distance: '2px',
				color: scrollBarColor,
				height: window.innerHeight - 56
			})
		}

		$('.side-nav-box').find('.side-nav').find('.main-menu').each(function() {
			$(this).children('ul').children('li').each(function() {

				if ($(this).children('.sub-menu').length) {
					$(this).children('a').on('click', function() {

						// Remove submenu scroll
						$('.side-nav-box').find('.side-nav').find('.main-menu').each(function() {
							$(this).children('ul').children('li').each(function() {
								$(this).children('.sub-menu').children('div').children('ul').removeAttr('style')
								$(this).children('.sub-menu').children('div').children('ul').slimScroll({
									destroy: true
								})	
							})
						})

						var menu = $(this).parent('li')
						if (menu.hasClass('active')) {
							// Add submenu state
							$('.side-nav-box').find('.side-nav').removeClass('sub-menu-active')

							menu.children('.sub-menu').animate({
								left: '-500px'
							}, 320).queue(function() {

								// Return scrollbar top position to zero
								$('.side-nav').children().first().css('margin-top', '0px')

								$('.side-nav').slimScroll({
									size: '5px',
									distance: '2px',
									color: scrollBarColor,
									height: window.innerHeight - 56
								}).scrollTop(scrollPosition.scrollBox)
								$('.side-nav').parent().find('.slimScrollBar').css('top', scrollPosition.scrollBar)

								// Make sidenav hovered due to slimscroll bug (Scrollbar not moving until side nav hovered)
								$('.side-nav').mouseover()

								menu.removeClass('active')
									.children('.sub-menu')
									.removeAttr('style').dequeue()
							})
						} else {
							// Remove submenu state
							$('.side-nav-box').find('.side-nav').addClass('sub-menu-active')

							// Save current scroll position
							if ($('.side-nav').parent().hasClass('slimScrollDiv')) {
								scrollPosition.scrollBox = $('.side-nav').scrollTop()
								scrollPosition.scrollBar = $('.side-nav').parent().find('.slimScrollBar').css('top')
							}

							// Prepare submenu scrollbar
							$('.side-nav-box').find('.side-nav').find('.main-menu').children('ul').children('li').removeClass('active')
							menu.addClass('first-position')
							menu.children('.sub-menu').children('ul').slimScroll({
								size: '5px',
								distance: '2px',
								color: scrollBarColor,
								height: window.innerHeight - 56
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
							$('.side-nav').children().first().css('margin-top', '-' + scrollPosition.scrollBox + 'px')

							// Destroy nav scrollbar
							$('.side-nav').removeAttr('style')
							$('.side-nav').slimScroll({
								destroy: true
							})
						}
					})
				}

				$(this).children('.sub-menu').children('ul').children('li').each(function() {
					$(this).children('a').on('click', function() {
						if ($(this).parent('li').hasClass('active')) {
							$(this).parent('li').removeClass('active')
						} else {
							$('.side-nav-box').find('.side-nav').find('.main-menu').children('ul').children('li').children('.sub-menu').children('div').children('ul').children('li').removeClass('active')
							$(this).parent('li').addClass('active')
						}
					})	
				})
			})
		})

		slimscroll()
		$(window).resize(function() {
			slimscroll()		
		})
	})
})(jQuery);