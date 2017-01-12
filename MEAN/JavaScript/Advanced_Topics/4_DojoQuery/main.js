(function() {
	function $Dojo(obj) {
		var el = document.getElementById(obj);
		this.click = function(func) {
			el.addEventListener('click', func);
		};
		this.hover = function(hIn, hOut) {
			el.addEventListener('mouseover', hIn);
			el.addEventListener('mouseout', hOut);
		};
		return this;
	}

	$Dojo('button').click(() => {
		alert('The button was clicked!');
	});

	$Dojo('main').hover(() => {
		console.log('main was hovered upon');
	}, () => {
		console.log('main is not being hovered on anymore');
	});
})();
