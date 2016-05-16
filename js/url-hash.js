$(function(){
	window.onhashchange = ( function(){
		var def = localStorage.getItem('2ez-token') == null ? 'default' : '2ez';
		var hash = location.hash.replace('#','') || def;
		document.title = hash;
		route(hash);
	});
	window.onhashchange();
});
