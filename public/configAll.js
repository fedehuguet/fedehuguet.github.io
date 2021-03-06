$( document ).ready(function() {
	$(window).on('beforeunload', function() {
		$(window).scrollTop(0);
	});
	var scroll_start = 0;
   	var startchange = $('#startchange');
   	var offset = startchange.offset();
   	$('.navbar').css('background-color', 'rgba(0, 0, 0, 0.3)');
	$(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start >= 250) {
          $(".navbar").css('background-color', 'rgba(0, 0, 0, 0.7)');
       } else {
          $('.navbar').css('background-color', 'rgba(0, 0, 0, 0.3)');
       }
   });

	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 99
		}, 600);
	});
	$(document).on('click', '#curriculumpdf', function (event) {
		// stop the browser from going to the href
        event = event || window.event; // for IE
        event.preventDefault(); 

        // launch a new window with your PDF
        window.open('img/FedericoHuguetCV.pdf', 'somename');
	});
});