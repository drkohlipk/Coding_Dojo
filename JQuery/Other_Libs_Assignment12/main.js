$(document).ready(function() {

	$("#container").twentytwenty({ //calls the twentytwenty plug in
		default_offset_pct: 0.9 //sets the slider at 90%
	});

	var teams = [ "San Francisco 49ers",
		"Chicago Bears",
		"Cincinnati Bengals",
		"Buffalo Bills",
		"Denver Broncos",
		"Cleveland Browns",
		"Tampa Bay Buccaneers",
		"Arizona Cardinals",
		"San Diego Chargers",
		"Kansas City Chiefs",
		"Indianapolis Colts",
		"Dallas Cowboys",
		"Miami Dolphins",
		"Philadelphia Eagles",
		"Atlanta Falcons",
		"New York Giants",
		"Jacksonville Jaguars",
		"New York Jets",
		"Detroit Lions",
		"Green Bay Packers",
		"Carolina Panthers",
		"New England Patriots",
		"Oakland Raiders",
		"Los Angeles Rams",
		"Baltimore Ravens",
		"Washington Redskins",
		"New Orlean Saints",
		"Seattle Seahawks",
		"Pittsburgh Steelers",
		"Houston Texans",
		"Tennesse Titans",
		"Minnesota Viking"
	]; //array of football teams

	var nfl = new Bloodhound({ //creates a new Bloodhound object
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		datumTokenizer: Bloodhound.tokenizers.whitespace,
		local: teams //sets the source for autocomplete to the teams var
	});

    var myAnimation; //creates parameters for jInvertScroll
    $.jInvertScroll(['#hdg', '#container', '#p2', 'form', '#bg'], { //the elements that will be scrolling
    	onScroll: function(percent) { //based on scroll position...
            if (percent < 0.9) { //if the user has scrolled less than 90%...
				$('form').fadeOut('fast'); //fadeOut the form window
				$('#hdg').fadeIn('fast'); //fade back in hdg
				$('#p2').fadeIn('fast'); //fade back in the paragraph
            }
            if (percent > 0.95) { //if the user has scrolled more than 95%...
                $('form').show(); //unhide the form
                $('#hdg').fadeOut('fast');  //fade out hdg
                $('#p2').fadeOut('fast'); //fade out paragraph
                myAnimation = anime({ //run the anime.js animation...
                    targets: ['form'], //target the form element
                    translateX: '38rem', //move right
                    translateY: '15rem', //move down
                    rotate: 720, //rotate 720 deg
                    scale: {
                        value: 5 //grow to 5 times the scale
                    },
                    borderRadius: '10px', //border radius set to 10px
                    duration: 2000, //last for 2 secs
                    loop: false, //do not loop!
					complete: function() { //on complete, run this function
						$('form').css('box-shadow', '1px 1px 50px 20px white'); //drop a shadow on the form element
						$('#lab').fadeIn('fast');  //fade in the label and input
						$('#words').focus(); //put focus on the input
					} //complete function
                }); //myAnimation object
            } //if > 0.95
    	} //onScroll funtion
    }); //$.jInvertScroll

	$('#lab .typeahead').typeahead(null, //call typeahead
	{
		name: 'nfl', //reference the nfl array
		source: nfl //reference the nfl array
	});

	$('form').submit(function() { //on form submit...
		var myVal = $('#words').val(); //set myVal to the value in the input
		if (myVal !== 'Chicago Bears') { //if myVal isn't da Bears...
			alert(myVal + ' suck!'); //tell the user that their team sucks!
		} else { //if da Bears IS in myVal...
			alert('Wooooo!  Great choice!');  //tell the user that they know what a great team looks like...
		} //else
		return false; //don't submit!
	}); //submit function

	$('#words').keydown(function(k) { //if a key is pressed in the input..
		if (k.keyCode == 13) { //and that key is an enter key
			$('form').submit(); //submit the form!
		} //if enter
	}); //keydown function

}); //document.ready
