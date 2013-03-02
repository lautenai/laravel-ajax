// public/js/script.js
$(document).ready(function() {
	$('#load-content-get').click(function(e) {
		// prevent the links default action
		// from firing
		e.preventDefault();
		// attempt to GET the new content
		$.get(BASE+'/content', function(data) {
			$('#content').html(data);
		});
	});

	$('#load-content-post').click(function(e) {
		// prevent the links default action
		// from firing
		e.preventDefault();
		// attempt to GET the new content
		// attempt a POST request with
		// some additional data
		$.post(BASE+'/content', {
			name: "Lautenai",
			age: 27
		}, function(data) {
			$('#content').html(data);
		});
	})
});