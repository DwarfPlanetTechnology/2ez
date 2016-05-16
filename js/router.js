
var ractive = new Ractive({
	el: 'container',
	template: "{{{page}}}",
	data: {
		page: "<h1>DEFAULT PAGE</h1>"
	}
});

function route(page) {
	$.get("templates/" + page, function(data){
		ractive.set('page', data);
	});
}
