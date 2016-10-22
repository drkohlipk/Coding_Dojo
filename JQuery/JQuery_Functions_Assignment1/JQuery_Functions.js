$(document).ready(function() {
	var $mainh2 = $('#mainCard h2'),
		$mainBtn = $('#mainCard button'),
		$mainP = $('#mainCard p:nth-child(3)'),
		counter = 0;

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
		} else if (counter == 1) {
			$mainP.removeClass('redify');
			$mainh2.text('HERE IT COMES!')
			$mainP.text(
				"Alright, enough of the child's play, let's do something awesome...");
		} else if (counter == 2) {
			$('body').css({
				'background': 'url("http://wallpapercave.com/wp/ERTfo8W.jpg")',
				'background-size': 'contain',
				'background-position': 'center'
			});
			$('#mainCard').css({
				'background': 'url("http://wallpapercave.com/wp/ERTfo8W.jpg")',
				'background-size': 'contain',
				'background-position': 'center',
				'background-repeat': 'no-repeat',
				'box-shadow': 'none'
			});
			$('#mainCard').html(
				"<h1>BACON!!!</h1><img src='http://big.assets.huffingtonpost.com/slide_297900_2459978_free.gif' alt='Sizzling Bacon' /><button>Next</button>"
			);
		}
		counter++;
	});
});
