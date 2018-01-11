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
	$(document).on('click', 'curriculumpdf', function (event) {
		// stop the browser from going to the href
        event = event || window.event; // for IE
        event.preventDefault(); 

        // launch a new window with your PDF
        window.open('img/FedericoHuguetCV.pdf', 'somename');

        // redirect current page to new location
        window.location = 'newpage.html';
	});
});