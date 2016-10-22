$(document).ready(function() {
	var $mainh2 = $('#mainCard h2'),
		$mainBtn = $('#mainCard button'),
		$mainP = $('#mainCard p:nth-child(3)'),
		counter = 0;

	$('h1, h2').css({
		'color': '#5c7095'
	});

	/********Moves to the 2nd slide********/
	$('#start').click(function() {
		$('#introCard').slideUp(); //introCard is gone now
		$('#mainCard').toggle();
	});

	$mainBtn.click(function() {
		if (counter === 0) {
			$mainP.addClass('redify');
			$mainh2.text('Get Ready!');
			$mainP.text(
				'Add .addClass and .text to the list!  Wooooooo!!');
			$('#mainCard').css({
				'display': 'none'
			});
			$('#mainCard').fadeIn('slow');
		} else if (counter == 1) {
			$mainP.removeClass('redify');
			$mainh2.text('HERE IT COMES!');
			$mainP.text(
				"Alright, enough of the child's play, let's do something awesome...");
		} else if (counter == 2) {
			$('body').css({
				'background': 'url("http://wallpapercave.com/wp/ERTfo8W.jpg")',
				'background-size': 'cover',
				'background-position': 'center'
			});
			$('body').html(
				"<h2 id='baconH'>BACON!!!</h2><img id='bacon' src='http://big.assets.huffingtonpost.com/slide_297900_2459978_free.gif' alt='Sizzling Bacon' />"
			);
			$('h2').css({
				'padding': '50px',
				'text-align': 'center',
				'color': 'rgba(#000000, 0)',
				'text-shadow': '2px 2px 10px #f38a02'
			});
			$('#bacon').css({
				'display': 'block',
				'width': '750px',
				'margin': '0 auto'
			});
		}
		counter++;
	});
});
