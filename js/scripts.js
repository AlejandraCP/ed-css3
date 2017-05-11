$(function(){
	var toggle_menu = $('#toggle-menu');
	var nav = $('#main-nav');


	toggle_menu.on('click', function(){
		nav.add($('body')).toggleClass('mostrar');
	});
});
