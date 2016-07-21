$(function(){
	var hex = "";

	$('.shaggy2').hover(function(){
		$(this).addClass('show');
		setInterval(colorLight, 250);
		$('#shagalaga').get(0).play();
	});
	
	function colorLight(){
		hex = '#'+Math.floor(Math.random()*16777215).toString(16);
		$('body').css('background',hex);
		console.log(hex);
	};

});