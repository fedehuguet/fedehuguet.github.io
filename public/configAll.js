$( document ).ready(function() {
	$(window).on('beforeunload', function() {
		$(window).scrollTop(0);
	});

	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 99
		}, 600);
	});
});