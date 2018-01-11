$( document ).ready(function() {
	$(window).on('beforeunload', function() {
		$(window).scrollTop(0);
	});
	var scroll_start = 0;
   	var startchange = $('#startchange');
   	var offset = startchange.offset();
	$(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top + 200) {
          $(".navbar").css('background', 'rgba(0, 0, 0, 0.3) !important');
       } else {
          $('.navbar').css('background', 'rgba(0, 0, 0, 0.7) !important');
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