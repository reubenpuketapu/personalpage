(function(){
	mixpanel.track('page-viewed', {
		'path' : window.location.pathname,
		'page-name' : document.title
	});
}());
