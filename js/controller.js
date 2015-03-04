$(function() {

	// Attach the handler for the pdf sample copy
	$('#sample-pdf').on('click', function() {
		window.open('https://www.dropbox.com/s/jbrrp0cekgd2yw0/GameMakerLanguageSamplePDF.pdf?dl=0');
		ga('send', 'event', 'button', 'click', 'Sample-PDF');
	});

	// Attach the handler for the pdf copy
	$('#buy-pdf').on('click', function() {
		window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8DX9AYEDYX6CY');
		ga('send', 'event', 'button', 'click', '$25-PDF');
	});

	// Attach the handler for the hard copy
	$('#buy-hardcopy').on('click', function() {
		window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8T78JS4U7DT4E');
		ga('send', 'event', 'button', 'click', '$60-Hard-Copy');
	});

	// Attach the handler for the international hard copy
	$('#buy-int-hardcopy').on('click', function() {
		window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=K6D9CFXJSQVYN');
		ga('send', 'event', 'button', 'click', '$80-Int-Hard-Copy');
	});

	// Attach the handler for the Kickstarter Information
	// $('#view-kickstarter').on('click', function() {
	// 	window.open('https://www.kickstarter.com/projects/heartbeast/game-maker-language-an-in-depth-guide');
	// });

});