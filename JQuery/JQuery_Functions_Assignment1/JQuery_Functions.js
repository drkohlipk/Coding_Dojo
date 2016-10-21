$(document).ready(function() {
	var $mainh2 = $('#mainCard h2'),
		$mainBtn = $('#mainCard button'),
		$mainP = $('#mainCard p');

	/********Moves to the 2nd slide********/
	$('#start').click(function() {
		$('#introCard').slideUp(); //introCard is gone now
		$('#mainCard').toggle();
	});

	$mainBtn.click(function() {

	});
});
