$(function() {

	// Attack the handler for the pdf copy
	$('#buy-pdf').on('click', function() {
		window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WZMV5TEV7HXGN' + '&output=embed';
	});

	// Attack the handler for the early access copy
	$('#buy-earlyaccess').on('click', function() {
		window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YZZP7LY6XZ3S6';
	});

	// Attack the handler for the hard copy
	$('#buy-hardcopy').on('click', function() {
		window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RRKN7YZ2RQXW6';
	});

	// Attack the handler for the international hard copy
	$('#buy-int-hardcopy').on('click', function() {
		window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AZ5N5SL5KXY5G';
	});
});