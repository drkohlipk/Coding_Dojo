$(document).ready(function() {
	var count = 0;
	$('form').submit(function() {
		var userName = $('input').val();
		count++;
		$.ajax({
			url: `https://api.github.com/users/${userName}`,
			data: 'json',
			success: function(response) {
				if (count == 1) {
					$('#display').css('height', '180px');
				} else if (count == 2) {
					$('#display').css('height', '360px');
				} else if (count == 3) {
					$('#display').css('height', '380px');
					$('main').append('<p><em>Please scroll down for more...</em></p>');
				}
				$('#display').show();
				$('#display').append(
					'<div class="displayBox"><div class="imgWrapper"><h3>' + response.login +
					'</h3><img src="' + response.avatar_url +
					'" alt="Avatar URL" /></div><div class="wrapper"><h4>' + response.name +
					'</h4><p>Respositories: ' + response.public_repos +
					'</p></div></div>');
				// $('#display').css('height', 'auto');
			}
		});
		$('input').val('');
		return false;
	});
	$('button').click(function() {
		$('form').submit();
	});
});
