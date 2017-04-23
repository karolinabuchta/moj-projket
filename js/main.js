/*start nav bar smooth*/

$(document).on('click', 'a[href^="#"]', function(event) {
		console.log('test');
		event.preventDefault();
		var menuHeight = $( '#main-nav').height();
		
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href')).offset().top - menuHeight
		}, 500);
	});

});

/*stop nav bar smooth*/